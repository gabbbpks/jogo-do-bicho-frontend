
import React from 'react';

interface PrizeContainerProps {
  children: React.ReactNode;
}

const PrizeContainer: React.FC<PrizeContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {children}
    </div>
  );
};

export default PrizeContainer;
