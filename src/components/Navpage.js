import React from 'react';
import { useLocation } from 'react-router-dom';
import CommonContent from './CommonContent';

const NavPage = () => {
  const location = useLocation();
  const isAboutOrFlagPage = location.pathname.includes('/about') || location.pathname.includes('/flag');

  return (
    <div>
      {isAboutOrFlagPage ? null : <CommonContent />}
    </div>
  );
}

export default NavPage;
