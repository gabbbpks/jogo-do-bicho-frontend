
import React from 'react';
import { useAuth } from '@/hooks/useAuth';

const BalanceHeader: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-bold">Saldo Disponível</h2>
      <span className="text-2xl font-bold text-green-500">R$ {user?.saldo?.toFixed(2) || '0,00'}</span>
    </div>
  );
};

export default BalanceHeader;
