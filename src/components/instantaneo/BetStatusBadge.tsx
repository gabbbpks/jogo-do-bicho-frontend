
import React from 'react';

interface BetStatusBadgeProps {
  status: string;
}

const BetStatusBadge: React.FC<BetStatusBadgeProps> = ({ status }) => {
  let colorClass = '';
  let label = '';
  
  switch (status) {
    case 'premiado':
      colorClass = 'bg-green-600/20 text-green-400';
      label = 'Ganhou';
      break;
    case 'aguardando':
      colorClass = 'bg-yellow-600/20 text-yellow-400';
      label = 'Aguardando';
      break;
    default:
      colorClass = 'bg-red-600/20 text-red-400';
      label = 'Perdeu';
  }
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs ${colorClass}`}>
      {label}
    </span>
  );
};

export default BetStatusBadge;
