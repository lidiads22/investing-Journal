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
            <h2 className="text-lg font-semibold text-violet-500 mb-2">1. Price Action</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Focus on the movement of price over time. Look for patterns like breakouts, fake-outs, retests.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-800 p-4 rounded shadow mb-6">
            <h2 className="text-lg font-semibold text-violet-500 mb-2">2. Support and Resistance</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Key horizontal levels where price reacts. Useful for planning entries, exits, and stop-losses.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-800 p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-violet-500 mb-2">3. Risk Management</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Never risk more than 1-2% per trade. Know your reward-to-risk ratio before entering.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
