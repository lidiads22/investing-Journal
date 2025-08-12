import { useEffect, useRef } from "react";

export default function TradingViewCard({
  title = "Live Chart",
  symbol = "OANDA:EURUSD", // e.g. BINANCE:SOLUSDT, NASDAQ:AAPL
  interval = "60",         // 1, 5, 15, 60, 240, D, W
  theme = "dark",         // "light" | "dark"
  height = 420,
  className = "col-span-12 lg:col-span-12",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    // Clear previous embed (important when props change or on hot reload)
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval,
      timezone: "Etc/UTC",
      theme,
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      withdateranges: true,
      hide_side_toolbar: false,
      save_image: false,
      calendar: false,
    });

    containerRef.current.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [symbol, interval, theme]);

  return (
    <div className={`${className} bg-white dark:bg-slate-800 rounded shadow`}>
      <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
      </div>
      <div className="p-5" style={{ height }}>
        <div className="tradingview-widget-container h-full" ref={containerRef}>
          <div className="tradingview-widget-container__widget h-full" />
        </div>
      </div>
    </div>
  );
}
