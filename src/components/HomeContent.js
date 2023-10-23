import React from 'react';

const HomeContent = () => {
  return (
    <div className="bg-gray-100 p-6 text-gray-800">
      <h1 className="text-3xl font-semibold mb-4">Welcome to Our Application</h1>
      <p className="text-lg mb-4">
        This is a user-friendly application designed to help you navigate and explore its features efficiently.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Getting Started</h2>
      <p className="mb-2">Follow these simple steps to get started:</p>
      <ol className="list-decimal pl-6">
        <li className="mb-2">Click on "Home" to return to the main page.</li>
        <li className="mb-2">Use the navigation menu to access different sections of the app.</li>
        <li className="mb-2">Explore our "About" page to learn more about our mission.</li>
        <li className="mb-2">Click on "Flag" to access the International Flag of Peace.</li>
      </ol>
    </div>
  );
};

export default HomeContent;
