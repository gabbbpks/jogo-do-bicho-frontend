
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";

const Saque: React.FC = () => {
  const [chavePix, setChavePix] = useState('');
  const [valor, setValor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth?redirect=saque');
    }
  }, [isAuthenticated, navigate]);

  // Prefill the PIX key with the user's CPF if available
  useEffect(() => {
    if (user?.cpf) {
      setChavePix(user.cpf);
    }
  }, [user]);

  const handleSacar = async () => {
    if (!chavePix || !valor) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos para continuar.",
        variant: "destructive"
      });
      return;
    }

    if (!user) {
      toast({
        title: "Usuário não autenticado",
        description: "Faça login para continuar.",
        variant: "destructive"
      });
      navigate('/auth?redirect=saque');
      return;
    }

    setIsLoading(true);

    try {
      // Prepare withdrawal data
      const saqueData = {
        valor: parseFloat(valor),
        userId: user.id,
        chavePix,
        nome: user.nome,
        sobrenome: user.sobrenome || '',
        cpf: user.cpf
      };

      // Here we would typically make an API call to process the withdrawal
      // For now, we'll simulate it with a toast

      // Uncomment this when the API endpoint is ready:
      /*
      const response = await axios.post('/api/pagamentos/solicitar-saque', saqueData);
      */

      toast({
        title: "Saque solicitado",
        description: `Solicitação de saque de R$ ${valor} para a chave PIX ${chavePix} foi recebida e está em processamento.`,
      });

      // Reset the form
      setValor('');
      
    } catch (error) {
      console.error("Erro ao solicitar saque:", error);
      toast({
        title: "Erro ao processar saque",
        description: "Não foi possível processar sua solicitação. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-6">
        <Link to="/" className="text-blue-500 flex items-center hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" /> Home
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-2">Solicitar Saque</h1>
      <p className="text-gray-400 mb-8">Preencha os dados abaixo para solicitar seu saque via PIX.</p>

      <div className="max-w-md mx-auto bg-[#12131e] border border-[#2A2D45] rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Chave PIX:</label>
            <Input
              type="text"
              value={chavePix}
              onChange={(e) => setChavePix(e.target.value)}
              className="bg-[#0E0D1B] border-[#2A2D45]"
              placeholder="Email, telefone ou CPF/CNPJ"
            />
            <p className="text-xs text-gray-400 mt-1">
              Usamos seu CPF como chave PIX padrão. Você pode alterar se necessário.
            </p>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Valor do saque:</label>
            <Input
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="bg-[#0E0D1B] border-[#2A2D45]"
              placeholder="Ex: 100"
              min="5"
            />
            {user?.saldo && (
              <p className="text-xs text-gray-400 mt-1">
                Saldo disponível: R$ {user.saldo.toFixed(2)}
              </p>
            )}
          </div>

          <div className="pt-4">
            <Button
              onClick={handleSacar}
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "Processando..." : "Solicitar Saque"}
            </Button>
          </div>

          {user && (
            <div className="mt-4 p-4 bg-[#0E0D1B] border border-[#2A2D45] rounded-lg">
              <h4 className="text-sm font-medium mb-2">Dados do titular:</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <div>Nome: {user.nome} {user.sobrenome || ''}</div>
                <div>CPF: {user.cpf}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Saque;
