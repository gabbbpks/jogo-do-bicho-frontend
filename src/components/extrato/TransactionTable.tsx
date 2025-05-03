
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Transaction } from '@/types/transactions';

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  const getTransactionIcon = (tipo: string) => {
    switch (tipo) {
      case 'deposito':
        return <div className="bg-green-600/20 p-2 rounded-full"><ArrowDown className="w-4 h-4 text-green-500" /></div>;
      case 'saque':
        return <div className="bg-red-600/20 p-2 rounded-full"><ArrowUp className="w-4 h-4 text-red-500" /></div>;
      case 'aposta':
        return <div className="bg-yellow-600/20 p-2 rounded-full"><ArrowUp className="w-4 h-4 text-yellow-500" /></div>;
      case 'ganho':
        return <div className="bg-blue-600/20 p-2 rounded-full"><ArrowDown className="w-4 h-4 text-blue-500" /></div>;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'concluido':
        return <span className="px-2 py-1 bg-green-600/20 text-green-500 text-xs rounded-full">Concluído</span>;
      case 'pendente':
        return <span className="px-2 py-1 bg-yellow-600/20 text-yellow-500 text-xs rounded-full">Pendente</span>;
      case 'cancelado':
        return <span className="px-2 py-1 bg-red-600/20 text-red-500 text-xs rounded-full">Cancelado</span>;
      default:
        return null;
    }
  };

  if (transactions.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        Nenhuma transação encontrada.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-400 border-b border-[#2A2D45]">
            <th className="pb-4 font-medium">Tipo</th>
            <th className="pb-4 font-medium">Descrição</th>
            <th className="pb-4 font-medium">Data</th>
            <th className="pb-4 font-medium text-right">Valor</th>
            <th className="pb-4 font-medium text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b border-[#2A2D45] hover:bg-[#1E1D2E]/50">
              <td className="py-4">
                {getTransactionIcon(transaction.tipo)}
              </td>
              <td className="py-4">
                <p className="font-medium">{transaction.descricao}</p>
                <p className="text-sm text-gray-400">ID: {transaction.id}</p>
              </td>
              <td className="py-4 text-gray-400">
                {new Date(transaction.data).toLocaleString()}
              </td>
              <td className={`py-4 text-right font-medium ${transaction.valor > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {transaction.valor > 0 ? '+' : ''} R$ {Math.abs(transaction.valor).toFixed(2)}
              </td>
              <td className="py-4 text-right">
                {getStatusBadge(transaction.status)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
