
import { useState, useEffect } from 'react';
import { apostasAPI } from '@/services/api';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { animals } from '@/data/animals';

export const useJogoInstantaneo = () => {
  const [selectedBicho, setSelectedBicho] = useState<string>('');
  const [valor, setValor] = useState<string>('5');
  const [apostasAnteriores, setApostasAnteriores] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useAuth();
  const [mensagem, setMensagem] = useState<string>('');

  useEffect(() => {
    if (isAuthenticated && user?.id) {
      loadPreviousBets();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  const loadPreviousBets = async () => {
    try {
      setLoading(true);
      console.log('Loading previous bets for user:', user?.id);
      const response = await apostasAPI.listar(user?.id);
      setApostasAnteriores(response.data.slice(0, 5)); // Mostrar apenas as 5 últimas apostas
      console.log('Previous bets loaded:', response.data.slice(0, 5));
    } catch (error) {
      console.error('Erro ao carregar apostas anteriores:', error);
      setMensagem('Não foi possível carregar as apostas anteriores.');
    } finally {
      setLoading(false);
    }
  };

  const handleApostar = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Faça login",
        description: "É necessário estar logado para apostar.",
        variant: "destructive"
      });
      return;
    }
    
    if (!selectedBicho || !valor) {
      toast({
        title: "Dados incompletos",
        description: "Selecione um bicho e insira um valor para apostar.",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);
      const valorNumerico = parseFloat(valor.replace(',', '.'));
      
      if (isNaN(valorNumerico) || valorNumerico <= 0) {
        toast({
          title: "Valor inválido",
          description: "Por favor, insira um valor válido para apostar.",
          variant: "destructive"
        });
        return;
      }
      
      const selectedAnimal = animals.find(animal => animal.name === selectedBicho);
      
      console.log('Placing bet with data:', {
        userId: user?.id,
        tipo: 'bicho',
        modalidade: 'grupo',
        valor: valorNumerico,
        selecao: {
          bicho: selectedBicho,
          numeros: selectedAnimal?.numbers || []
        }
      });
      
      await apostasAPI.criarAposta({
        userId: user?.id,
        tipo: 'bicho',
        modalidade: 'grupo',
        valor: valorNumerico,
        selecao: {
          bicho: selectedBicho,
          numeros: selectedAnimal?.numbers || []
        }
      });
      
      toast({
        title: "Aposta realizada",
        description: `Aposta de R$ ${valor} no bicho ${selectedBicho} registrada com sucesso!`,
      });
      
      setSelectedBicho('');
      setValor('5');
      loadPreviousBets();
    } catch (err) {
      console.error('Erro ao registrar aposta:', err);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao registrar sua aposta.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    selectedBicho,
    setSelectedBicho,
    valor,
    setValor,
    apostasAnteriores,
    loading,
    isAuthenticated,
    mensagem,
    handleApostar
  };
};
