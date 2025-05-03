
import React from 'react';

interface BalanceStatProps {
  label: string;
  value: number;
  type: 'deposito' | 'saque' | 'ganho';
}

const BalanceStat: React.FC<BalanceStatProps> = ({ label, value, type }) => {
  const getTextColorClass = () => {
    switch (type) {
      case 'deposito':
        return 'text-green-500';
      case 'saque':
        return 'text-red-500';
      case 'ganho':
        return 'text-blue-500';
      default:
        return 'text-white';
    }
  };

  const getPrefix = () => {
    switch (type) {
      case 'deposito':
      case 'ganho':
        return '+ ';
      case 'saque':
        return '- ';
      default:
        return '';
    }
  };

  return (
    <div className="bg-[#0F0F1B] rounded-lg p-4">
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <p className={`text-xl font-bold ${getTextColorClass()}`}>
        {getPrefix()}R$ {Math.abs(value).toFixed(2)}
      </p>
    </div>
  );
};

export default BalanceStat;
