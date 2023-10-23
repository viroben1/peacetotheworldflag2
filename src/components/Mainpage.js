import React from 'react';
import { useLocation } from 'react-router-dom';

const MainPage = () => {
  const location = useLocation();

  // Check if the current location matches policy pages
  const isPolicyPage = location.pathname.includes('/privacy') ||
    location.pathname.includes('/refund') ||
    location.pathname.includes('/delivery') ||
    location.pathname.includes('/terms');

  return (
    <div className={`MainPage bg-gray-100 p-8 ${isPolicyPage ? 'hidden' : ''}`}>
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the International Flag of Peace</h1>
      </header>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-700">About Us</h2>
        <p className="text-gray-800">
          We are dedicated to promoting peace, unity, and understanding among all people.
          Our flag symbolizes the hope for a more peaceful world.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-700">Our Mission</h2>
        <p className="text-gray-800">
          Our mission is to spread awareness about 
          the International Flag of Peace and to encourage acts of kindness 
          and charity.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-700">Contact Us</h2>
        <p className="text-gray-800">
          If you have any questions or would like to get involved, 
          please don't hesitate to reach out to us.
        </p>
        <p className="mt-2 text-blue-600">Email: contact@internationalflagofpeace.com</p>
      </section>
    </div>
  );
};

export default MainPage;