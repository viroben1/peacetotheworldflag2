import React from 'react';
import PolicyFooter from '../components/PolicyFooter';

const DeliveryPolicy = () => {
  return (
    <div className="PolicyPage p-6">
      <h1 className="text-3xl font-semibold mb-4 text-blue-600">Delivery Policy</h1>
      <p className="text-lg text-gray-800">
        Our delivery policy outlines the terms and conditions for the delivery of products purchased through our platform. We aim to provide timely and secure delivery services to our customers.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Delivery Times</h2>
      <p className="text-lg text-gray-800">
        Delivery times may vary based on your location and product availability. We make every effort to deliver products within the estimated delivery timeframes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-blue-600">Delivery Charges</h2>
      <p className="text-lg text-gray-800">
        Delivery charges may apply based on the shipping method and destination. These charges will be clearly displayed at the time of purchase.
      </p>

      {/* Additional content as needed */}
      <PolicyFooter />
    </div>
  );
}

export default DeliveryPolicy;

