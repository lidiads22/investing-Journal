

// Tiny, theme-aware card with price, % change badge, and an SVG sparkline
export default function MarketCard({
  name = "--",
  symbol = "",
  price,
  percent,
  series = [],
}) {
  // --- formatting & safety ---
  const pctNum = typeof percent === "number" ? percent : Number(percent);
  const priceNum = typeof price === "number" ? price : Number(price);

  const up = Number.isFinite(pctNum) ? pctNum > 0 : false;
  const down = Number.isFinite(pctNum) ? pctNum < 0 : false;

  const pctLabel = Number.isFinite(pctNum)
    ? `${pctNum > 0 ? "+" : ""}${pctNum.toFixed(2)}%`
    : "--";

  const priceLabel = Number.isFinite(priceNum)
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: priceNum < 10 ? 4 : 2,
      }).format(priceNum)
    : "--";

  // --- sparkline path (0..1 normalized) ---
  const w = 120, h = 32, pad = 2;
  const n = series.length;

  // Normalize with safe min/max
  let d = "";
  if (n >= 2 && series.some((v) => Number.isFinite(Number(v)))) {
    const vals = series.map((v) => Number(v));
    const min = Math.min(...vals);
    const max = Math.max(...vals);

    const range = Math.max(1e-9, max - min); // avoid divide-by-zero
    const xs = vals.map((_, i) => (i / (n - 1)) * (w - pad * 2) + pad);
    const ys = vals.map((v) => {
      const t = (v - min) / range; // 0..1
      return h - pad - t * (h - pad * 2);
    });

    d = `M ${xs.map((x, i) => `${x} ${ys[i]}`).join(" L ")}`;
  } else if (n === 1 && Number.isFinite(Number(series[0]))) {
    // Single point: draw a tiny dot
    const x = pad;
    const y = h / 2;
    d = `M ${x} ${y} L ${x + 0.01} ${y}`;
  } else {
    d = ""; // no data
  }

  // Colors
  const lineColor =
    up ? "text-emerald-500" : down ? "text-rose-500" : "text-slate-400";
  const badgeClass = up
    ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300"
    : down
    ? "bg-rose-500/15 text-rose-600 dark:text-rose-300"
    : "bg-slate-500/15 text-slate-600 dark:text-slate-300";

  return (
    <div
      className="rounded-xl border p-4 shadow-sm
                 bg-white/70 dark:bg-slate-800/60
                 border-slate-200 dark:border-slate-800/50
                 backdrop-blur supports-[backdrop-filter]:bg-white/50
                 dark:supports-[backdrop-filter]:bg-slate-800/40"
      title={`${name} (${symbol})`}
      aria-label={`${name} ${symbol} ${priceLabel} ${pctLabel}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs text-slate-600 dark:text-slate-300">{symbol}</div>
          <div className="font-semibold text-lg leading-tight text-slate-900 dark:text-slate-50">
            {name}
          </div>
        </div>

        <span className={`text-xs px-2 py-1 rounded-full ${badgeClass}`}>
          {pctLabel}
        </span>
      </div>

      <div className="mt-2 flex items-end justify-between">
        <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          {priceLabel}
        </div>

        <svg
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          className="opacity-90"
          role="img"
          aria-label="price sparkline"
        >
          {/* subtle baseline */}
          <line
            x1="0"
            x2={w}
            y1={h - 1}
            y2={h - 1}
            className="stroke-slate-300/40 dark:stroke-slate-600/40"
            strokeWidth="1"
          />
          {/* area gradient */}
          <defs>
            <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>

          {d && (
            <>
              {/* area under line */}
              <path
                d={`${d} L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`}
                fill="url(#sparkFill)"
                className={lineColor}
              />
              {/* line */}
              <path
                d={d}
                fill="none"
                stroke="currentColor"
                className={lineColor}
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      </div>
    </div>
  );
}
