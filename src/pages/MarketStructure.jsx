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

  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
    <li><strong>Break of Structure (BoS):</strong> Clear break of previous high/low — often signals a change in trend.</li>
    <li><strong>Change of Character (ChoCh):</strong> Early signal of trend shift — usually internal structure flips.</li>
    <li><strong>Accumulation / Distribution:</strong> Sideways zones that hint at big directional moves.</li>
    <li><strong>Fair Value Gaps (FVG):</strong> Price inefficiencies that act as magnets for retracements.</li>
    <li><strong>Order Blocks:</strong> Institutional zones of previous buying/selling.</li>
    <li><strong>Zig Zag Indicator:</strong> Automatically marks pivots and structure for clarity.</li>
  </ul>

  {/* Image Layout Container */}
  <div className="flex flex-col md:flex-row items-center justify-left gap-4">
    {/* BoS / ChoCh diagram */}
    <img
      src="/src/images/choch.png"
      alt="Break of Structure and Change of Character"
      className="max-w-xs rounded shadow"
    />

    {/* FVG diagram */}
    <img
      src="/src/images/fvg.png"
      alt="Fair Value Gap Diagram"
      className="max-w-xs rounded shadow"
    />
  </div>
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
  <h2 className="text-lg font-semibold text-violet-500 mb-2">
    Breaks in Structure = Opportunity
  </h2>
  <p className="text-gray-700 dark:text-gray-200 mb-3">
    Market structure shifts are some of the clearest signals of changing momentum. 
    In an uptrend, a break of structure to the downside often hints at a reversal. 
    In a downtrend, a break of structure to the upside can signal bullish control.
  </p>

  <div className="flex flex-col md:flex-row items-center justify-left gap-8 mb-5">
    {/* sideway diagram */}
    <img
      src="/src/images/sidewayDiagram.png"
      alt="Break of Structure and Change of Character"
      className="max-w-md rounded shadow"
    />
  </div>

  <h3 className="font-semibold text-violet-400 mb-1">How to Trade It:</h3>
  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-3">
    <li><strong>Step 1:</strong> Identify the break (price closes beyond the last Higher Low / Lower High).</li>
    <li><strong>Step 2:</strong> Wait for a retest of the broken level (acts as new support/resistance).</li>
    <li><strong>Step 3:</strong> Confirm entry with price action (engulfing, rejection wick, volume spike).</li>
    <li><strong>Step 4:</strong> Place stop-loss beyond the retest zone to limit false breakouts.</li>
  </ul>

  <h3 className="font-semibold text-violet-400 mb-1">Targets:</h3>
  <p className="text-gray-700 dark:text-gray-200 mb-3">
    First target = nearest liquidity pool (recent high/low). 
    Second target = measured move (distance of last swing projected from the break).
  </p>

  <h3 className="font-semibold text-violet-400 mb-1">Key Notes:</h3>
  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
    <li>Break + Retest = higher probability than trading the break alone.</li>
    <li>Use multiple timeframes: confirmation on higher TF gives stronger signals.</li>
    <li>Always calculate Risk-to-Reward (RR) before entering. Aim ≥ 2:1.</li>
  </ul>
</section>

{/* Entry & Exit Playbook (by Market Phase) */}
<section id="playbook" className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg mb-8">
 <h2 className="text-lg font-semibold text-violet-500 mb-2">
  Entry & Exit Playbook (by Market Phase)
</h2>

  {/* Sideways Play */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-violet-400 mb-2">Sideways Consolidation</h3>
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <img
        src="/src/images/tradeviewExample1.png"
        alt="Sideways range with entries/exits"
        className="w-full md:w-2/3 max-w-3xl object-contain rounded-lg shadow-lg"
      />
      <div className="text-gray-700 dark:text-gray-200 text-base md:text-md">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Entry (long):</strong> Rejection at support; confirm with wick/engulf + volume.</li>
          <li><strong>Entry (short):</strong> Rejection at resistance with confirmation.</li>
          <li><strong>Stops:</strong> Outside the box (below support / above resistance).</li>
          <li><strong>Targets:</strong> Mid-range partial → opposite edge full; breakout = range height projection.</li>
          <li><strong>RR guide:</strong> Aim ≥ 2R edge→edge; skip if RR &lt; 1.8R.</li>
          <li><strong>Session:</strong> Prefer London/NY overlap for GBPUSD; avoid low-vol Asia for range plays.</li>
          <li><strong>Flip plan:</strong> Break + retest of 1.3580/1.3387 → switch to trend play.</li>
        </ul>
      </div>
    </div>
  </div>

  {/* (Optional) Uptrend & Downtrend cards go here similarly */}
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
