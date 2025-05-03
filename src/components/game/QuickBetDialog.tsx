
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import QuickBetContent from "./quick-bet/QuickBetContent";
import { generateQuickBet } from "@/utils/quickBetGenerator";
import { apostasAPI } from "@/services/api";

interface QuickBetDialogProps {
  open: boolean;
  onClose: () => void;
}

const QuickBetDialog = ({ open, onClose }: QuickBetDialogProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [betAmount, setBetAmount] = useState(5);
  const [quickBet, setQuickBet] = useState<{
    type: string;
    numbers: string[];
    prizes: string[];
    amount: string;
    drawTime: string;
  } | null>(null);
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      generateRandomQuickBet();
    }
  }, [open]);

  const handleIncreaseAmount = () => {
    setBetAmount((prev) => {
      const newAmount = Math.min(prev + 5, 100); // Limit to 100
      if (quickBet) {
        setQuickBet({
          ...quickBet,
          amount: newAmount.toFixed(2).replace('.', ','),
        });
      }
      return newAmount;
    });
  };

  const handleDecreaseAmount = () => {
    setBetAmount((prev) => {
      const newAmount = Math.max(prev - 5, 5); // Minimum 5
      if (quickBet) {
        setQuickBet({
          ...quickBet,
          amount: newAmount.toFixed(2).replace('.', ','),
        });
      }
      return newAmount;
    });
  };

  const generateRandomQuickBet = () => {
    setIsLoading(true);
    
    // Generate a quick bet
    setTimeout(() => {
      setQuickBet(generateQuickBet(betAmount));
      setIsLoading(false);
    }, 1000);
  };

  const handleAcceptBet = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Login necessário",
        description: "Faça login para continuar com sua aposta rápida",
        variant: "destructive"
      });
      navigate("/auth?redirect=jogar");
      onClose();
      return;
    }
    
    if (!quickBet || !user?.id) {
      toast({
        title: "Erro",
        description: "Não foi possível processar sua aposta",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsLoading(true);
      
      // Convert the string numbers to number array
      const betNumbers = quickBet.numbers.map(n => parseInt(n));
      
      // Create the bet in the backend
      await apostasAPI.criarAposta({
        userId: user.id,
        tipo: quickBet.type,
        valor: parseFloat(quickBet.amount.replace(',', '.')),
        modalidade: quickBet.type,
        selecao: {
          tipo: quickBet.type,
          numeros: betNumbers
        },
        numeros: betNumbers
      });
      
      toast({
        title: "Aposta realizada!",
        description: `Sua aposta rápida de ${quickBet.type} foi registrada com sucesso.`,
      });
      
      onClose();
      
      // Refresh the page to update user balance
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      
    } catch (error) {
      console.error("Error placing quick bet:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao registrar sua aposta rápida.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#1E1D2E] border border-[#2A2D45] text-white">
        <DialogHeader>
          <DialogTitle className="text-xl">Aposta Rapidinha</DialogTitle>
          <DialogDescription className="text-gray-400">
            Geramos uma sugestão de aposta para você com base nas modalidades mais populares.
          </DialogDescription>
        </DialogHeader>
        
        <QuickBetContent 
          quickBet={quickBet}
          isLoading={isLoading}
          betAmount={betAmount}
          handleIncreaseAmount={handleIncreaseAmount}
          handleDecreaseAmount={handleDecreaseAmount}
        />
        
        <DialogFooter className="flex flex-col sm:flex-row gap-3">
          <Button 
            variant="outline" 
            className="w-full bg-[#12111F] border-[#2A2D45] text-white hover:bg-[#2A2D45]"
            onClick={generateRandomQuickBet}
            disabled={isLoading}
          >
            Gerar Outra
          </Button>
          <Button 
            variant="outline" 
            className="w-full bg-[#12111F] border-[#2A2D45] text-white hover:bg-[#2A2D45]"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button 
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
            onClick={handleAcceptBet}
            disabled={isLoading}
          >
            {isLoading ? "Processando..." : "Confirmar Aposta"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuickBetDialog;
