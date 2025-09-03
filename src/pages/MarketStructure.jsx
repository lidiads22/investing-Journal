export default function MarketStructure() {
  return (
    <div className="flex flex-col min-h-screen overflow-auto p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-violet-500 mb-6">📊 Market Structure</h1>

{/* 1. What is Market Structure? */}
<section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
  <h2 className="text-lg font-semibold text-violet-500 mb-2">
    What is Market Structure?
  </h2>
  <p className="text-gray-700 dark:text-gray-200 mb-4">
    Market structure refers to the behavior of price over time. It shows how price forms
    trends using <strong>higher highs (HH), higher lows (HL)</strong> in an uptrend or
    <strong> lower highs (LH), lower lows (LL)</strong> in a downtrend.
  </p>

  {/* Example Chart */}
<div className="flex flex-col items-center my-13">
  <img
    src="/src/images/UnderstandingTrend.png"
    alt="Uptrend Higher Highs and Higher Lows"
    className="w-full max-w-2xl rounded-xl shadow-lg"
  />
  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center px-4">
    Example: An uptrend with Higher Highs and Higher Lows (HH/HL).
  </p>
</div>
</section>


      {/* 2. Types of Market Conditions */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold text-violet-500 mb-2">Types of Market Conditions</h2>

        <div className="flex flex-col items-center my-13">
        <img
            src="/src/images/trend2.png"
            alt="Uptrend Higher Highs and Higher Lows"
            className="w-full max-w-2xl rounded-xl shadow-lg"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center px-4">
            Example: An uptrend with Higher Highs and Higher Lows (HH/HL).
        </p>
        </div>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
          <li><strong>Uptrend:</strong> HH and HLs forming higher levels.</li>
          <li><strong>Downtrend:</strong> LL and LHs forming lower levels.</li>
          <li><strong>Range:</strong> Price bouncing between support and resistance.</li>
          <li><strong>Consolidation:</strong> Price moving sideways before a breakout.</li>
          <li><strong>Accumulation:</strong> Sideways action in downtrend that leads to reversal or continuation upward.</li>
          <li><strong>Distribution:</strong> Sideways action in uptrend that leads to a reversal or continuation downward.</li>
        </ul>
      </section>

      {/* 3. Key Structure Terms */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold text-violet-500 mb-2">Key Market Structure Concepts</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
          <li><strong>Break of Structure (BoS):</strong> Clear break of previous high/low — often signals a change in trend.</li>
          <li><strong>Change of Character (ChoCh):</strong> Early signal of trend shift — usually internal structure flips.</li>
          <li><strong>Accumulation / Distribution:</strong> Sideways zones that hint at big directional moves.</li>
          <li><strong>Fair Value Gaps (FVG):</strong> Price inefficiencies that act as magnets for retracements.</li>
          <li><strong>Order Blocks:</strong> Institutional zones of previous buying/selling.</li>
          <li><strong>Zig Zag Indicator:</strong> Automatically marks pivots and structure for clarity.</li>
        </ul>
      </section>

      {/* 4. Real-Time Structure Reading */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold text-violet-500 mb-2">Reading Market Structure Live</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-2">
          Focus on the most recent swing points. Wait for confirmed structure breaks, and combine your analysis with candlestick patterns and volume spikes.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
          <li>Use 2–3 most recent highs/lows to define structure.</li>
          <li>Don’t chase wick breaks — look for body closings.</li>
          <li>Identify fakeouts vs. real breaks with confirmation.</li>
        </ul>
      </section>

      {/* 5. Common Mistakes */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold text-violet-500 mb-2">Common Mistakes</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
          <li>Mislabeling HH/HL or LL/LH points.</li>
          <li>Ignoring the bigger trend on higher timeframes.</li>
          <li>Using inconsistent zoom levels for structure.</li>
          <li>Overcomplicating with unnecessary indicators.</li>
        </ul>
      </section>

      {/* 6. Multiple Timeframe Analysis */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold text-violet-500 mb-2">Multiple Timeframe Analysis (MTA)</h2>
        <p className="text-gray-700 dark:text-gray-200">
          Start your analysis from higher timeframes (1D, 4H) and work your way down (1H, 15m). Trend alignment across timeframes gives high-confluence setups.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
          <li><strong>HTF:</strong> Establish trend bias.</li>
          <li><strong>MTF:</strong> Confirm setups.</li>
          <li><strong>LTF:</strong> Execute entries with tighter risk.</li>
        </ul>
      </section>

      {/* 7. Trading Based on Structure Breaks */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold text-violet-500 mb-2">Breaks in Structure = Opportunity</h2>
        <p className="text-gray-700 dark:text-gray-200">
          In an uptrend, a break of structure to the downside often hints at a reversal. In a downtrend, a break of structure to the upside can signal bullish control. Wait for confirmation and retest entries.
        </p>
      </section>

      {/* 8. Using Market Structure in Your Strategy */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold text-violet-500 mb-2">How to Use Structure in Your Strategy</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
          <li>Mark structure zones in pre-market analysis.</li>
          <li>Use FVGs, Order Blocks, and Fib Levels for entry confluence.</li>
          <li>Plan your stop loss beyond key structural points.</li>
          <li>Use structure breaks and ChoCh to define bias shifts.</li>
        </ul>
      </section>

      {/* 9. Tools to Help You */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded shadow">
        <h2 className="text-lg font-semibold text-violet-500 mb-2">Tools to Scan Market Structure</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
          <li><strong>Zig Zag Indicator:</strong> Automatically highlights key pivots (A–E).</li>
          <li><strong>Auto Fibs:</strong> Visualize retracement strength (e.g., .50–.618).</li>
          <li><strong>Structure Scanners:</strong> Look for pullbacks, breakouts, and reversals.</li>
          <li><strong>Pivot Labels:</strong> Track swing high/low definitions and alerts.</li>
        </ul>
      </section>
    </div>
  );
}
