import React from 'react';
import PolicyFooter from '../components/PolicyFooter';

const TermsAndConditions = () => {
  return (
    <div className="PolicyPage p-6">
      <h1 className="text-3xl font-semibold mb-4 text-blue-600">Terms and Conditions</h1>
      <p className="text-lg mb-4 text-gray-800">
        By accessing and using our services, you agree to be bound by our Terms and Conditions. Please read these terms carefully before using our platform.
      </p>
      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Use of Our Services</h2>
      <p className="text-lg text-gray-800">
        You agree to use our services in compliance with these terms and all applicable laws and regulations. Do not use our services if you do not agree with these terms.
      </p>
      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Intellectual Property</h2>
      <p className="text-lg text-gray-800">
        All content on our platform, including text, graphics, logos, and images, is our property and is protected by intellectual property laws.
      </p>
      {/* Additional content as needed */}
      <PolicyFooter />
    </div>
  );
}

export default TermsAndConditions;

