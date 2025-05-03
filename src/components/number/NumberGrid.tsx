
import React from 'react';

interface NumberGridProps {
  children: React.ReactNode;
}

const NumberGrid: React.FC<NumberGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2">
      {children}
    </div>
  );
};

export default NumberGrid;
