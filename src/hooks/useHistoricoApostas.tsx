
import { useState, useEffect } from 'react';
import { apostasAPI } from '@/services/api';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

export interface BetFilters {
  filtroDias: number;
  filtroStatus: string;
}

export const useHistoricoApostas = () => {
  const [apostas, setApostas] = useState([]);
  const [filtroDias, setFiltroDias] = useState(7);
  const [filtroStatus, setFiltroStatus] = useState('todos');
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const buscarApostas = async () => {
      if (!isAuthenticated || !user?.id) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const response = await apostasAPI.listar(user.id);
        setApostas(response.data);
      } catch (error) {
        console.error('Erro ao carregar apostas:', error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar suas apostas.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    buscarApostas();
  }, [filtroDias, filtroStatus, isAuthenticated, user]);

  const apostasFiltradas = apostas.filter((aposta: any) => {
    const dataAposta = new Date(aposta.data);
    const diasDiferenca = (Date.now() - dataAposta.getTime()) / (1000 * 3600 * 24);
    const dentroDoPeriodo = diasDiferenca <= filtroDias;

    const statusCompativel =
      filtroStatus === 'todos' ||
      aposta.status === filtroStatus;

    return dentroDoPeriodo && statusCompativel;
  });

  return {
    apostas,
    apostasFiltradas,
    filtroDias,
    setFiltroDias,
    filtroStatus,
    setFiltroStatus,
    loading,
    isAuthenticated
  };
};
