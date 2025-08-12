// src/components/MarketSnapshot.jsx
import { useState, useEffect, useCallback } from "react";
import MarketCard from "./MarketCard.jsx"; // ✅ correct import

// .env must contain:  VITE_FINNHUB_KEY=your_key
const API_KEY = import.meta.env.VITE_FINNHUB_KEY;
const FINN = "https://finnhub.io/api/v1";

const ASSETS = [
  { id: "SPY", name: "S&P 500",    symbol: "SPY", type: "stock" },
  { id: "QQQ", name: "NASDAQ-100", symbol: "QQQ", type: "stock" },
  { id: "DIA", name: "Dow Jones",  symbol: "DIA", type: "stock" },
  { id: "GLD", name: "Gold",       symbol: "GLD", type: "stock" },
  { id: "SLV", name: "Silver ETF", symbol: "SLV", type: "stock" } 
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getQuote(symbol) {
  const url = `${FINN}/quote?symbol=${encodeURIComponent(symbol)}&token=${API_KEY}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`quote ${symbol} ${r.status}`);
  return r.json(); // { c, dp, ... }
}

async function getCandleStock(symbol, from, to, resolution = "15") {
  const url = `${FINN}/stock/candle?symbol=${encodeURIComponent(
    symbol
  )}&resolution=${resolution}&from=${from}&to=${to}&token=${API_KEY}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`candle ${symbol} ${r.status}`);
  return r.json(); // { s, c:[] }
}

export default function MarketSnapshot() {
  const [data, setData] = useState({});

  const load = useCallback(async () => {
    if (!API_KEY) {
      console.warn("Missing VITE_FINNHUB_KEY");
      return;
    }

    const next = {};

    // Quotes for ETFs only (skip BTC to avoid 403/429 on free tier)
    const quoteSymbols = ASSETS.filter((a) => a.type === "stock");
    for (const a of quoteSymbols) {
      try {
        const q = await getQuote(a.symbol);
        next[a.id] = {
          name: a.name,
          price: q.c ?? 0,
          percent: q.dp ?? 0,
          series: [],
        };
      } catch (e) {
        console.error("Quote error", a.symbol, e.message);
        next[a.id] = { name: a.name, price: 0, percent: 0, series: [] };
      }
      await sleep(120);
    }

    // BTC placeholder (no fetch on free tier)
    next.BTC = next.BTC ?? { name: "Bitcoin", price: 0, percent: 0, series: [] };

    // Sparklines for ETFs
    const now = Math.floor(Date.now() / 1000);
    const from = now - 60 * 60 * 24 * 5;
    for (const sym of ["SPY", "QQQ", "DIA", "GLD"]) {
      try {
        const c = await getCandleStock(sym, from, now, "15");
        if (c?.s === "ok" && Array.isArray(c.c)) {
          next[sym].series = c.c;
        }
      } catch (e) {
        console.error("Candle error", sym, e.message);
      }
      await sleep(150);
    }

    setData(next);
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, 90_000); // gentle refresh
    return () => clearInterval(id);
  }, [load]);

  return (
    <section className="mb-6">
      <h3 className="sr-only">Market Snapshot</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        {ASSETS.map((a) => (
          <MarketCard
            key={a.id}
            name={data[a.id]?.name ?? a.name}
            symbol={a.symbol}
            price={data[a.id]?.price ?? 0}
            percent={data[a.id]?.percent ?? 0}
            series={data[a.id]?.series ?? []}
          />
        ))}
      </div>
    </section>
  );
}
