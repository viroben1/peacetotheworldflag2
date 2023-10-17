// App.js or your routing configuration file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar component
import HomePage from './pages/home'; // Import your home page
import AboutPage from './pages/about'; // Import your about page
import FlagPage from './pages/flagPage'; // Import your flagPage

import NavPage from './components/Navpage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/flag" element={<FlagPage />} />
        </Routes>
        <NavPage />
      </div>
    </Router>
  );
}

export default App;


