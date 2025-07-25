import React, { useState, useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Datepicker from '../components/Datepicker';

function TradeIdeas() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ticker, setTicker] = useState('');
  const [status, setStatus] = useState('Watching');
  const [notes, setNotes] = useState('');
  const [ideas, setIdeas] = useState([]);
  const [filter, setFilter] = useState('All');

  // 🧠 Filtered list based on selected filter
  const filteredIdeas = filter === 'All' ? ideas : ideas.filter((idea) => idea.status === filter);

  // 🧠 Derived stats
  const totalIdeas = ideas.length;
  const readyCount = ideas.filter((idea) => idea.status === 'Ready').length;
  const watchingCount = ideas.filter((idea) => idea.status === 'Watching').length;
  const noSetupCount = ideas.filter((idea) => idea.status === 'No Setup').length;

  // 📥 Load from localStorage
  useEffect(() => {
    const storedIdeas = localStorage.getItem('tradeIdeas');
    if (storedIdeas) {
      setIdeas(JSON.parse(storedIdeas));
    }
  }, []);

  // 💾 Save to localStorage
  useEffect(() => {
    localStorage.setItem('tradeIdeas', JSON.stringify(ideas));
  }, [ideas]);

  const handleSave = () => {
    const newIdea = {
      id: Date.now(),
      date: selectedDate.toLocaleDateString(),
      ticker,
      status,
      notes,
    };
    setIdeas([...ideas, newIdea]);
    setTicker('');
    setStatus('Watching');
    setNotes('');
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* 📊 Summary Section */}
              <div className="bg-slate-800 p-4 rounded-lg min-h-[200px]">
                <h2 className="text-xl font-semibold mb-4">📊 Summary</h2>
                <ul className="text-sm space-y-2">
                  <li className="text-gray-700 dark:text-gray-300"><strong>Total Ideas:</strong> {totalIdeas}</li>
                  <li className="text-gray-700 dark:text-gray-300"><strong>✅ Ready:</strong> {readyCount}</li>
                  <li className="text-gray-700 dark:text-gray-300"><strong>⏳ Watching:</strong> {watchingCount}</li>
                  <li className="text-gray-700 dark:text-gray-300"><strong>❌ No Setup:</strong> {noSetupCount}</li>
                </ul>

                {/* 🔘 Filter Buttons */}
                        <div className="mt-4 space-x-2">
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

  {/* 📂 Saved Ideas */}
  <div className="w-full lg:w-2/3 bg-white dark:bg-slate-800 rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold mb-4">📂 Saved Ideas</h2>
    {filteredIdeas.length === 0 ? (
      <p className="text-gray-500">No ideas for this filter.</p>
    ) : (
      <ul className="space-y-4">
        {filteredIdeas.map((idea) => (
          <li key={idea.id} className="border rounded p-4">
            <div className="text-sm text-gray-400">{idea.date}</div>
            <div className="font-bold text-lg">{idea.ticker}</div>
            <div className="text-sm text-blue-500 font-medium">{idea.status}</div>
            <div className="text-sm mt-2 text-gray-700 dark:text-gray-300">{idea.notes}</div>
          </li>
        ))}
      </ul>
    )}
  </div>

  {/* 🧠 Add Trade Idea */}
  <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 w-full max-w-2xl">
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
        className="w-full px-3 py-2 border rounded"
        placeholder="e.g. AAPL"
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Status</label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full px-3 py-2 border rounded"
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
        className="w-full px-3 py-2 border rounded"
        rows="4"
        placeholder="What are you seeing on the chart?"
      />
    </div>

    <button
      onClick={handleSave}
      className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700"
    >
      Save Idea
                </button>
             </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TradeIdeas;
