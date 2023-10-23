// App.js or your routing configuration file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar component
import MainPage from './pages/MainPage';
import AboutPage from './pages/about'; // Import your about page
import FlagPage from './pages/flagPage'; // Import your flagPage
import PrivacyPolicy from './pages/privacy';
import RefundPolicy from './pages/refund';
import DeliveryPolicy from './pages/delivery';
import TermsAndConditions from './pages/terms';
import NavPage from './components/Navpage';
import Mainpage from './components/Mainpage';






function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/flag" element={<FlagPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/delivery" element={<DeliveryPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />

        </Routes>
        <NavPage />
        <Mainpage />
      </div>
    </Router>
  );
}

export default App;


