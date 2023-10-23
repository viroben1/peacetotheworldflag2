import React from 'react';

const PolicyFooter = () => {
  return (
    <div className="text-center mt-6 py-2 bg-gray-200">
      <p className="text-sm">
        If you have questions, suggestions, or need assistance, please feel free to contact our support team at{' '}
        <a href="mailto:support@internationalflagofpeace.com" className="text-blue-500">
          support@internationalflagofpeace.com
        </a>
        .
      </p>
      <p className="text-xs text-gray-600">Last updated: October 14, 2023</p>
      <p className="text-xs text-gray-600">
        Return to the{' '}
        <a href="/" className="text-blue-500">
          home page
        </a>
        .
      </p>
    </div>
  );
};

export default PolicyFooter;
