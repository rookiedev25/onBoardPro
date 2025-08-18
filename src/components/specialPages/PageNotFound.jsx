import React from 'react';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f6fa]">
      <div className="text-7xl font-bold text-primary-700 mb-4">404</div>
      <div className="text-2xl text-gray-800 mb-4">Page Not Found</div>
      <div className="text-gray-500 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </div>
      <a
        href="/dashboard"
        className="px-8 py-3 bg-blue-500 text-white rounded shadow-md font-medium hover:bg-primary-800 transition"
      >
        Go to Dashboard
      </a>
    </div>
  );
};

export default PageNotFound;
