
import React from 'react';
import BalanceStat from './BalanceStat';

interface BalanceStatsProps {
  depositos: number;
  saques: number;
  ganhos: number;
}

const BalanceStats: React.FC<BalanceStatsProps> = ({ depositos, saques, ganhos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <BalanceStat 
        label="Depósitos" 
        value={depositos} 
        type="deposito" 
      />
      <BalanceStat 
        label="Saques" 
        value={saques} 
        type="saque" 
      />
      <BalanceStat 
        label="Ganhos" 
        value={ganhos} 
        type="ganho" 
      />
    </div>
  );
};

export default BalanceStats;
