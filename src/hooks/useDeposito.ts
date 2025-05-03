
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import axios from 'axios';

export const useDeposito = () => {
  const [valor, setValor] = useState('20');
  const [cupom, setCupom] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth?redirect=deposito');
    }
  }, [isAuthenticated, navigate]);

  const handleFinalizarDeposito = async () => {
    if (!user) {
      toast({
        title: "Usuário não autenticado",
        description: "Faça login para continuar com o depósito.",
        variant: "destructive",
      });
      navigate('/auth?redirect=deposito');
      return;
    }

    setIsLoading(true);

    try {
      // Prepare user data for payment
      const paymentData = {
        valor: parseInt(valor),
        userId: user.id,
        nome: user.nome,
        sobrenome: user.sobrenome || '',
        email: user.email,
        cpf: user.cpf,
        telefone: user.telefone,
        cupom: cupom || undefined
      };

      // Here we would typically make an API call to generate the PIX
      // For now, we'll just simulate it with a toast
      
      // Uncomment this when the API endpoint is ready:
      /*
      const response = await axios.post('/api/pagamentos/gerar-pix', paymentData);
      const pixData = response.data;
      
      // Navigate to PIX display page or show QR code
      */

      toast({
        title: "Depósito iniciado",
        description: `Um QR code PIX no valor de R$ ${valor},00 será gerado em breve para ${user.nome}.`,
      });
      
      // In a real implementation, you might navigate to a page showing the PIX QR code
      // navigate('/pix-qrcode', { state: { pixData } });
      
    } catch (error) {
      console.error("Erro ao gerar PIX:", error);
      toast({
        title: "Erro ao processar depósito",
        description: "Não foi possível gerar o QR code PIX. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    valor,
    setValor,
    cupom,
    setCupom,
    isLoading,
    user,
    isAuthenticated,
    handleFinalizarDeposito
  };
};
