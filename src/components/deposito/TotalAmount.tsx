
import React from 'react';

interface TotalAmountProps {
  valor: string;
}

const TotalAmount: React.FC<TotalAmountProps> = ({ valor }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-gray-400">Total:</span>
      <span className="text-xl font-bold text-white">R$ {valor},00</span>
    </div>
  );
};

export default TotalAmount;
