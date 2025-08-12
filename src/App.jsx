// /src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "/src/css/style.css";
import "/src/charts/ChartjsConfig";

// pages
import Dashboard   from "/src/pages/Dashboard.jsx";
import TradeIdeas  from "/src/pages/TradeIdeas.jsx";
import PLTracker   from "/src/pages/PLTracker.jsx";
import KeyConcepts from "/src/pages/KeyConcepts.jsx";

// layout
import Sidebar from "/src/partials/Sidebar.jsx";
import Header  from "/src/partials/Header.jsx";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.documentElement.style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-900 text-slate-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trade-ideas" element={<TradeIdeas />} />
            <Route path="/pl-tracker" element={<PLTracker />} />
            <Route path="/key-concepts" element={<KeyConcepts />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

