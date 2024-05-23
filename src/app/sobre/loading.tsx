import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg className="animate-spin h-12 w-12 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.536v3.268a4.001 4.001 0 00-4 4.506H6zM11.536 20c1.797 0 3.436-.73 4.624-1.904l-2.72-2.719A3.965 3.965 0 0012 16.465v3.536zm3.535-2.293l2.719-2.719A7.963 7.963 0 0120 12h-3.536a3.977 3.977 0 00-1.414 1.414z"></path>
      </svg>
    </div>
  );
};

export default Loading;
