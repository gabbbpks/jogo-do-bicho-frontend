
import React from 'react';
import BalanceHeader from './BalanceHeader';
import BalanceStats from './BalanceStats';

interface BalanceSummaryProps {
  depositos: number;
  saques: number;
  ganhos: number;
}

const BalanceSummary: React.FC<BalanceSummaryProps> = ({ depositos, saques, ganhos }) => {
  return (
    <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6 mb-8">
      <BalanceHeader />
      <BalanceStats 
        depositos={depositos} 
        saques={saques} 
        ganhos={ganhos} 
      />
    </div>
  );
};

export default BalanceSummary;
