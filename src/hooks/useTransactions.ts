
import { useState, useEffect } from 'react';
import { Transaction } from '@/types/transactions';
import { pagamentosAPI } from '@/services/api';
import { useAuth } from '@/hooks/useAuth';

// Mock data for now
const mockTransactions: Transaction[] = [
  {
    id: '1',
    tipo: 'deposito',
    valor: 100,
    data: '2023-05-01T14:30:00',
    descricao: 'Depósito via PIX',
    status: 'concluido'
  },
  {
    id: '2',
    tipo: 'aposta',
    valor: -20,
    data: '2023-05-01T15:45:00',
    descricao: 'Aposta no Jogo do Bicho - Grupo 01',
    status: 'concluido'
  },
  {
    id: '3',
    tipo: 'ganho',
    valor: 50,
    data: '2023-05-01T18:00:00',
    descricao: 'Ganho na aposta - Grupo 01',
    status: 'concluido'
  },
  {
    id: '4',
    tipo: 'saque',
    valor: -80,
    data: '2023-05-02T10:15:00',
    descricao: 'Saque via PIX',
    status: 'pendente'
  }
];

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        // In a real app, fetch from API when ready
        // if (isAuthenticated && user?.id) {
        //   const response = await pagamentosAPI.listarTransacoes(user.id);
        //   setTransactions(response.data);
        // } else {
        //   setTransactions([]);
        // }
        
        // Using mock data for now
        setTransactions(mockTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user, isAuthenticated]);

  useEffect(() => {
    const filtered = transactions.filter(transaction => {
      if (filter === 'all') return true;
      return transaction.tipo === filter;
    });
    
    setFilteredTransactions(filtered);
  }, [filter, transactions]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const getSummary = () => {
    const summary = transactions.reduce((acc, transaction) => {
      if (transaction.tipo === 'deposito') {
        acc.depositos += transaction.valor;
      } else if (transaction.tipo === 'saque') {
        acc.saques += transaction.valor;
      } else if (transaction.tipo === 'ganho') {
        acc.ganhos += transaction.valor;
      }
      return acc;
    }, { depositos: 0, saques: 0, ganhos: 0 });

    return summary;
  };

  return {
    transactions: filteredTransactions,
    loading,
    filter,
    handleFilterChange,
    summary: getSummary(),
  };
};
