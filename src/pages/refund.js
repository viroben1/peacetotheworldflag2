import React from 'react';
import PolicyFooter from '../components/PolicyFooter';

const RefundPolicy = () => {
  return (
    <div className="PolicyPage p-6">
      <h1 className="text-3xl font-semibold mb-4 text-blue-600">Refund Policy</h1>
      <p className="text-lg mb-4 text-gray-800">
        Our refund policy applies to purchases made through our platform. We strive to provide excellent service, but if you're not completely satisfied with your purchase, you may be eligible for a refund or exchange.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Eligibility</h2>
      <p className="mb-2 text-gray-800">
        To be eligible for a refund, your request must meet certain criteria, including the date of purchase and the condition of the item.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">How to Request a Refund</h2>
      <p className="mb-2 text-gray-800">
        If you meet the eligibility criteria, please contact our customer support team to initiate a refund request.
      </p>
      {/* Additional content as needed */}
      <PolicyFooter />
    </div>
  );
}

export default RefundPolicy;
