
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTransactions } from '@/hooks/useTransactions';
import BalanceSummary from '@/components/extrato/BalanceSummary';
import TransactionFilters from '@/components/extrato/TransactionFilters';
import TransactionTable from '@/components/extrato/TransactionTable';

const Extrato: React.FC = () => {
  const { transactions, filter, handleFilterChange, summary, loading } = useTransactions();

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-6">
        <Link to="/" className="text-blue-500 flex items-center hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" /> Home
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-2">Extrato</h1>
      <p className="text-gray-400 mb-8">Histórico de todas as suas movimentações financeiras</p>

      <BalanceSummary 
        depositos={summary.depositos} 
        saques={summary.saques} 
        ganhos={summary.ganhos} 
      />
      
      <TransactionFilters 
        filter={filter} 
        onFilterChange={handleFilterChange} 
      />
      
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6A48F3]"></div>
        </div>
      ) : (
        <TransactionTable transactions={transactions} />
      )}
    </div>
  );
};

export default Extrato;
