
import React from 'react';

const BetsLoading: React.FC = () => {
  return (
    <div className="flex justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6A48F3]"></div>
    </div>
  );
};

export default BetsLoading;
