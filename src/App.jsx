import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';

// Import pages
// Routes here! 
import Dashboard from './pages/Dashboard';
import TradeIdeas from './pages/TradeIdeas';
import PLTracker from  './pages/PLTracker';
import KeyConcepts from './pages/KeyConcepts';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/trade-ideas" element={<TradeIdeas />} />    
        <Route path="/pl-tracker" element={<PLTracker />} />
        <Route path="/key-concepts" element={<KeyConcepts />} />
      </Routes>
    </>
  );
}

export default App;
