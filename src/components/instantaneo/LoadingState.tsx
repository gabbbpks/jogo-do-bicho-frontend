
import React from 'react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="animate-pulse flex space-x-2">
        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingState;
