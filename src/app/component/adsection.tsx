import React from 'react';

const AdSection: React.FC = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md h-full flex flex-col justify-center text-center w-full">
      <h2 className="text-lg font-semibold mb-2">Ad Space</h2>
      <p className="text-gray-600">
        Your ad could be here! Reach out to millions of viewers with our advertising options.
      </p>
    </div>
  );
};

export default AdSection;
