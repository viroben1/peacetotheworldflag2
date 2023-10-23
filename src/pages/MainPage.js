import React from 'react';
import { useLocation } from 'react-router-dom';

import HomeContent from '../components/HomeContent'; // Import your HomeContent component
import MainPage from './MainPage'; // Import your MainPage component

const Main = () => {
  const location = useLocation();

  // Check if the current location matches policy pages
  const isPolicyPage = location.pathname.includes('/privacy') ||
    location.pathname.includes('/refund') ||
    location.pathname.includes('/delivery') ||
    location.pathname.includes('/terms');

  return (
    <div>
      {isPolicyPage ? <HomeContent /> : <MainPage />}
    </div>
  );
};

export default Main;


