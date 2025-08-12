// src/pages/Dashboard.jsx
import MarketSnapshot from '/src/components/MarketSnapshot.jsx';
import TradingViewCard from '/src/components/TradingViewCard.jsx';

export default function Dashboard() {
  return (
    <div className="space-y-6 bg-slate-900 min-h-screen text-slate-100 p-6">
      {/* Top row: at-a-glance */}
      <MarketSnapshot />

      {/* Chart row */}
      <div className="grid grid-cols-12 gap-6">
        <TradingViewCard
          title="S&P 500 (SPX) — 1H"
          // For TradingView, these symbols tend to work better than ^GSPC:
          // symbol="SP:SPX"           // S&P 500 index
          // symbol="NASDAQ:NDX"       // NASDAQ 100
          // symbol="DJ:DJI"           // Dow Jones
          symbol="SP:SPX"
          interval="60"
          theme="dark"
          height={420}
          className="col-span-12"
        />
      </div>
    </div>
  );
}


