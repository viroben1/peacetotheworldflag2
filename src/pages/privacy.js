import React from 'react';
import PolicyFooter from '../components/PolicyFooter';

const PrivacyPolicy = () => {
  return (
    <div className="PolicyPage bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold mb-4 text-blue-600">Privacy Policy</h1>
      <p className="text-lg mb-4 text-gray-800">
        Your privacy is important to us. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your personal information. By using our services, you consent to the practices described in this policy.
      </p>
      <h2 className="text-2xl font-semibold mt-4 mb-2 text-blue-600">Information We Collect</h2>
      <p className="text-lg mb-4 text-gray-800">
        We may collect information such as your name, email address, and contact details when you use our services. We use this information to provide and improve our services.
      </p>
      <h2 className="text-2xl font-semibold mt-4 mb-2 text-blue-600">How We Use Your Information</h2>
      <p className="text-lg mb-4 text-gray-800">
        We use your information to provide, maintain, and improve our services. We may also use your information to communicate with you, send updates, and personalize your experience.
      </p>
      {/* Additional content as needed */}
      <PolicyFooter />
    </div>
  );
}

export default PrivacyPolicy;
