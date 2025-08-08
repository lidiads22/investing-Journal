import React, { useState } from 'react'
import Sidebar from '../partials/Sidebar'
import Header from '../partials/Header'

export default function KeyConcepts() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow p-6 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">🧠 Key Concepts</h1>

          <section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
            <h2 className="text-lg font-semibold text-violet-500 mb-2">What Are Supply and Demand Zones?</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              Supply and demand zones highlight areas on a chart where price reacts strongly — either pushing upward (demand) or downward (supply). These zones help traders identify where buying or selling pressure is likely to appear again.
            </p>
             <img
              src="/src/images/img-trade.png"
              alt="Trading Key Concepts Visual"
              className="rounded-lg shadow-md mb-6 mx-auto max-w-3xl w-full max-h-[500px] object-contain"
            />
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              A <strong>demand zone</strong> represents a price area where there’s a strong interest in buying. This often causes the price to bounce upward. A <strong>supply zone</strong> is the opposite — where sellers take over, often pushing the price down.
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              These zones are used to plan entries, exits, or place stop-loss and take-profit levels. They can also help determine when a trend might reverse or continue.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
            <h2 className="text-lg font-semibold text-violet-500 mb-2">How to Identify Them</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
              <li>Look for sharp moves away from a price area — those are usually supply or demand zones.</li>
              <li>Price stalling or consolidating before a big move is a strong clue.</li>
              <li>Use previous price reversals as hints for future reactions.</li>
              <li>Combine with volume spikes or confirmation candles.</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
            <h2 className="text-lg font-semibold text-violet-500 mb-2">How to Use Them in Your Strategy</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
              <li><strong>Reversals:</strong> Enter trades at zones where price reversed before.</li>
              <li><strong>Breakouts:</strong> Watch for strong breakouts through zones to join momentum.</li>
              <li><strong>Trend trading:</strong> Use zones to re-enter trades in line with the trend.</li>
              <li><strong>Risk management:</strong> Place stop-losses just beyond zones to limit risk.</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-slate-800 p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-violet-500 mb-2">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-green-500">Pros:</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                  <li>Easy to identify on charts</li>
                  <li>Helps pinpoint entry/exit areas</li>
                  <li>Can be combined with any strategy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-500">Cons:</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                  <li>Subjective — depends on trader interpretation</li>
                  <li>Zones don’t always hold</li>
                  <li>Can be time-consuming to draw and monitor</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}