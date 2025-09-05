import React, { useState, useEffect } from 'react';
import Datepicker from '../components/Datepicker';

// Delcare function for the API
const fetchStockData = async (ticker) => {
  try {
    const response = await fetch(
      `https://api.twelvedata.com/price?symbol=${ticker}&apikey=${import.meta.env.VITE_TWELVE_API_KEY}`
    );
    const data = await response.json();
    console.log('Raw API response:', data);

    if (data.price) {
      return parseFloat(data.price);
    } else {
      console.warn('Invalid response from API:', data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching stock price:', error);
    return null;
  }
};

function TradeIdeas() { 
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ticker, setTicker] = useState('');
  const [status, setStatus] = useState('Watching');
  const [notes, setNotes] = useState('');
  const [ideas, setIdeas] = useState([]);
  const [filter, setFilter] = useState('All');

  // Filtered list
  const filteredIdeas =
    filter === 'All' ? ideas : ideas.filter((idea) => idea.status === filter);

  // Derived counts
  const totalIdeas   = ideas.length;
  const readyCount   = ideas.filter((i) => i.status === 'Ready').length;
  const watchingCount= ideas.filter((i) => i.status === 'Watching').length;
  const noSetupCount = ideas.filter((i) => i.status === 'No Setup').length;

  // 🔽 ADD THIS BLOCK — metrics used by the Summary card
  const now = Date.now();
  const ideas7d  = ideas.filter(i => now - i.id <= 7  * 24 * 60 * 60 * 1000).length;
  const ideas30d = ideas.filter(i => now - i.id <= 30 * 24 * 60 * 60 * 1000).length;

  const pct = (n, d) => (d ? Math.round((n / d) * 100) : 0);
  const pctReady    = pct(readyCount,    totalIdeas);
  const pctWatching = pct(watchingCount, totalIdeas);
  const pctNoSetup  = pct(noSetupCount,  totalIdeas);

  const topTickers = Object.entries(
    ideas.reduce((m, { ticker }) => {
      const t = (ticker || '').trim().toUpperCase();
      if (!t) return m;
      m[t] = (m[t] || 0) + 1;
      return m;
    }, {})
  ).sort((a, b) => b[1] - a[1]).slice(0, 5);

  // Load from localStorage
  useEffect(() => {
    const storedIdeas = localStorage.getItem('tradeIdeas');
    if (storedIdeas) setIdeas(JSON.parse(storedIdeas));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('tradeIdeas', JSON.stringify(ideas));
  }, [ideas]);

  const handleSave = async () => {
    const price = await fetchStockData(ticker);
    const newIdea = {
      id: Date.now(), // if you ever change this to a UUID, add a createdAt field
      date: selectedDate.toLocaleDateString(),
      ticker,
      status,
      notes,
      price,
    };
    setIdeas([...ideas, newIdea]);
    setTicker('');
    setStatus('Watching');
    setNotes('');
  };

  const handleDelete = (id) => {
    setIdeas(ideas.filter((i) => i.id !== id));
  };

  return (
  <div className="flex min-h-screen">
    <main className="grow">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

        {/* Top: Summary (2/3) + Add form (1/3)  |  Bottom: Saved Ideas full-width */}
        <div className="grid grid-cols-12 gap-6">

{/* 📊 Summary */}
<section
  className="
    col-span-12 xl:col-span-8 
    order-1
    bg-slate-800 p-6 rounded-lg space-y-6
    min-w-0 xl:pr-6
  "
>
  <div className="col-span-12 xl:col-span-8 order-1 space-y-6 min-w-0 xl:pr-6">
    <h2 className="text-xl font-semibold">📊 Summary</h2>
    <div className="hidden md:flex gap-2">
      {['All', 'Ready', 'Watching', 'No Setup'].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-3 py-1 rounded text-sm border transition ${
            filter === type
              ? 'bg-violet-600 text-white border-violet-700'
              : 'bg-slate-700 text-gray-300 hover:bg-slate-600 border-slate-600'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  </div>

  {/* KPIs */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="bg-slate-900/40 rounded-lg p-4">
      <div className="text-slate-300 text-sm">Total Ideas</div>
      <div className="text-2xl font-bold">{totalIdeas}</div>
      <div className="text-xs text-slate-400 mt-1">Last 30d: {ideas30d}</div>
    </div>
    <div className="bg-slate-900/40 rounded-lg p-4">
      <div className="text-slate-300 text-sm">Added (7d)</div>
      <div className="text-2xl font-bold">{ideas7d}</div>
      <div className="text-xs text-slate-400 mt-1">This week’s flow</div>
    </div>
    <div className="bg-slate-900/40 rounded-lg p-4">
      <div className="text-slate-300 text-sm">Watching</div>
      <div className="text-2xl font-bold">{watchingCount}</div>
      <div className="text-xs text-slate-400 mt-1">{pctWatching}% of total</div>
    </div>
    <div className="bg-slate-900/40 rounded-lg p-4">
      <div className="text-slate-300 text-sm">Ready</div>
      <div className="text-2xl font-bold">{readyCount}</div>
      <div className="text-xs text-slate-400 mt-1">{pctReady}% of total</div>
    </div>
  </div>

  {/* Status distribution */}
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-slate-300 text-sm">Status Distribution</span>
      <span className="text-slate-400 text-xs">
        Ready {pctReady}% • Watching {pctWatching}% • No Setup {pctNoSetup}%
      </span>
    </div>
    <div className="flex h-2 rounded overflow-hidden bg-slate-700">
      <div style={{ width: `${pctReady}%` }} className="bg-emerald-500" />
      <div style={{ width: `${pctWatching}%` }} className="bg-amber-500" />
      <div style={{ width: `${pctNoSetup}%` }} className="bg-rose-500" />
    </div>
  </div>

  {/* Top tickers */}
  <div>
    <div className="text-slate-300 text-sm mb-2">Top Tickers</div>
    {topTickers.length === 0 ? (
      <div className="text-slate-400 text-sm">No tickers yet. Add an idea ➜</div>
    ) : (
      <div className="flex flex-wrap gap-2">
        {topTickers.map(([t, c]) => (
          <span
            key={t}
            className="px-2 py-1 rounded border border-slate-600 bg-slate-900/40 text-slate-200 text-sm"
          >
            {t} <span className="opacity-70">×{c}</span>
          </span>
        ))}
      </div>
    )}
  </div>
</section>



  {/* 🧠 Add Trade Idea (sticky on desktop) */}
  <section
      className="
      col-span-12 xl:col-span-4
      order-2
      bg-slate-800 rounded-lg shadow p-6

      "
    >
      <h2 className="text-xl font-semibold mb-4">🧠 Add Trade Idea</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Date</label>
        <Datepicker value={selectedDate} onChange={setSelectedDate} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Ticker</label>
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value.toUpperCase())}
          className="w-full px-3 py-2 border rounded bg-slate-900/40 border-slate-600 text-slate-100"
          placeholder="e.g. AAPL"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-3 py-2 border rounded bg-slate-900/40 border-slate-600 text-slate-100"
        >
          <option value="Watching">⏳ Watching</option>
          <option value="Ready">✅ Ready to Trade</option>
          <option value="No Setup">❌ No Setup</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full px-3 py-2 border rounded bg-slate-900/40 border-slate-600 text-slate-100"
          rows={4}
          placeholder="What are you seeing on the chart?"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 w-full"
      >
        Save Idea
      </button>
    </section>

          {/* 📂 Saved Ideas (full-width bottom, scrollable) */}
          <section className="col-span-12 order-3 bg-slate-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">📂 Saved Ideas</h2>
            {filteredIdeas.length === 0 ? (
              <p className="text-gray-400">No ideas for this filter.</p>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredIdeas.map((idea) => (
                  <li key={idea.id} className="border border-slate-700/70 rounded p-4 bg-slate-900/30">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-sm text-gray-400">{idea.date}</div>
                      <span className={`text-xs px-2 py-1 rounded border
                        ${idea.status === 'Ready' ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300' :
                          idea.status === 'Watching' ? 'bg-amber-600/20 border-amber-500 text-amber-300' :
                          'bg-rose-600/20 border-rose-500 text-rose-300'}`}>
                        {idea.status}
                      </span>
                    </div>
            
                    <div className="font-semibold text-base mt-1">{idea.ticker}</div>
                    <div className="text-emerald-400 font-medium">
                      Current Price: {idea.price ? `$${idea.price}` : 'N/A'}
                    </div>
                    <div className="mt-2 text-gray-300 line-clamp-2">{idea.notes}</div>
                    <div className="mt-3 flex items-center justify-end gap-3">
                      <button
                        onClick={() => handleDelete(idea.id)}
                        className="text-red-400 text-sm hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

        </div>
      </div>
    </main>
  </div>
);
}

export default TradeIdeas;
