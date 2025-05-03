
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import LoginPromptModal from "@/components/game/LoginPromptModal";

interface BetActionsProps {
  selectedBetType: string | null;
  selectedNumbers: number[];
  selectedPrizes: string[];
}

const BetActions = ({ 
  selectedBetType, 
  selectedNumbers, 
  selectedPrizes 
}: BetActionsProps) => {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const handlePlaceBet = () => {
    if (!selectedBetType) {
      toast({
        title: "Selecione um tipo de aposta",
        description: "Por favor, escolha um tipo de aposta para continuar.",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedNumbers.length === 0) {
      toast({
        title: "Selecione algum número",
        description: "Por favor, selecione pelo menos um número para apostar.",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedPrizes.length === 0) {
      toast({
        title: "Selecione um prêmio",
        description: "Por favor, selecione pelo menos um prêmio para apostar.",
        variant: "destructive"
      });
      return;
    }
    
    if (!isAuthenticated) {
      setShowLoginPrompt(true);
    } else {
      // Process the bet
      toast({
        title: "Aposta realizada!",
        description: `Sua aposta foi registrada com sucesso.`,
      });
    }
  };
  
  const handleLoginCancel = () => {
    setShowLoginPrompt(false);
  };
  
  const handleLoginSuccess = () => {
    setShowLoginPrompt(false);
    // Process the bet after successful login
    toast({
      title: "Aposta realizada!",
      description: `Sua aposta foi registrada com sucesso.`,
    });
  };

  return (
    <>
      {/* Login Modal */}
      <LoginPromptModal 
        show={showLoginPrompt}
        onCancel={handleLoginCancel}
        onLogin={handleLoginSuccess}
      />
    </>
  );
};

export default BetActions;
