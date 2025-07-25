import React, { useState } from 'react';
import Datepicker from '../components/Datepicker';
import { useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

function TradeIdeas() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ticker, setTicker] = useState('');
  const [status, setStatus] = useState('Watching');
  const [notes, setNotes] = useState('');
  const [ideas, setIdeas] = useState([]);

  // Loading ideas from localStorage when the page first loads
  useEffect(()=> {
    const storedIdeas = localStorage.getItem('tradeIdeas');
    if (storedIdeas){
        setIdeas(JSON.parse(storedIdeas));
    }
  }, []);

  // Auto save ideas
  // Save ideas to localStorage whenever they change
    useEffect(()=> {
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

   // 🧠 Derived values from the ideas list
    const totalIdeas = ideas.length;
    const readyCount = ideas.filter((idea) => idea.status === 'Ready').length;
    const watchingCount = ideas.filter((idea) => idea.status === 'Watching').length;
    const noSetupCount = ideas.filter((idea) => idea.status === 'No Setup').length;

  return (
  <div className="flex h-screen overflow-hidden">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="grow">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"></div>


    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
     {/* Summary Stats Section */}
    <div className="bg-slate-800 p-4 rounded-lg min-h-[200px]">


        
    <h2 className="text-xl font-semibold mb-4">📊 Summary</h2>
        {/* Stats go here */}
    <ul className="text-sm space-y-2">
    <li className="text-gray-700 dark:text-gray-300">
        <strong>Total Ideas:</strong> {totalIdeas}
    </li>
    <li className="text-gray-700 dark:text-gray-300">
        <strong>✅ Ready:</strong> {readyCount}
    </li>
    <li className="text-gray-700 dark:text-gray-300">
        <strong>⏳ Watching:</strong> {watchingCount}
    </li>
    <li className="text-gray-700 dark:text-gray-300">
        <strong>❌ No Setup:</strong> {noSetupCount}
    </li>
    </ul>

    </div>

      {/* LEFT: Saved Ideas */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">📂 Saved Ideas</h2>

        {ideas.length === 0 ? (
          <p className="text-gray-500">No ideas saved yet.</p>
        ) : (
          <ul className="space-y-4">
            {ideas.map((idea) => (
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

      {/* RIGHT: Add Trade Idea Form */}
      <div className="self-start">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 max-h-[75vh] overflow-y-auto">
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

