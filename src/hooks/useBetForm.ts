
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { apostasAPI } from "@/services/api";
import { useAuth } from "@/contexts/AuthContext";
import { validateBet } from "@/utils/betValidation";
import { Animal } from "@/data/animals";

interface UseBetFormProps {
  selectedTab: string;
  selectedAnimal: Animal | null;
  selectedNumber: number | null;
  selectedBetType?: string | null;
  selectedNumbers?: number[];
  selectedPrizes?: string[];
  selectedDrawTime?: string;
}

export const useBetForm = ({
  selectedTab,
  selectedAnimal,
  selectedNumber,
  selectedBetType,
  selectedNumbers = [],
  selectedPrizes = ["1"],
  selectedDrawTime = "10h Bahia"
}: UseBetFormProps) => {
  const [betAmount, setBetAmount] = useState("5");
  const [betType, setBetType] = useState(selectedBetType || "normal");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { user, isAuthenticated } = useAuth();

  // Update betType when selectedBetType changes
  useEffect(() => {
    if (selectedBetType) {
      setBetType(selectedBetType);
    }
  }, [selectedBetType]);

  const handleBetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setBetAmount(value);
    }
  };

  const handleBetTypeChange = (value: string) => {
    setBetType(value);
  };

  const handlePlaceBet = async () => {
    // Validate bet before submission
    if (!validateBet({
      isAuthenticated,
      userId: user?.id,
      selectedBetType,
      selectedNumbers,
      betAmount,
      selectedAnimal,
      selectedNumber,
      selectedTab,
      selectedPrizes,
      drawTime: selectedDrawTime
    })) {
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Determine what to send based on bet type
      let selecao = {};
      let numeros: number[] = [];
      
      if (selectedBetType) {
        // For structured bets from BetTypeSelection
        numeros = selectedNumbers;
        
        // Prepare selection based on the bet type
        selecao = {
          tipo: selectedBetType,
          numeros: selectedNumbers,
          premios: selectedPrizes,
          extracao: selectedDrawTime
        };
      } else {
        // For traditional animal selection
        if (selectedTab === "bicho" && selectedAnimal) {
          selecao = { 
            bicho: selectedAnimal.name, 
            numeros: selectedAnimal.numbers,
            premios: selectedPrizes,
            extracao: selectedDrawTime
          };
          numeros = selectedAnimal.numbers;
        } else if (selectedTab === "numero" && selectedNumber !== null) {
          selecao = { 
            numero: selectedNumber,
            premios: selectedPrizes,
            extracao: selectedDrawTime
          };
          numeros = [selectedNumber];
        }
      }
      
      const apostaData = {
        userId: user?.id,
        tipo: selectedBetType || selectedTab,
        valor: parseInt(betAmount),
        modalidade: betType,
        selecao: selecao,
        numeros: numeros
      };
      
      console.log("Enviando aposta:", apostaData);
      
      const response = await apostasAPI.criarAposta(apostaData);
      console.log("Resposta da aposta:", response.data);
      
      let betMessage = `Aposta de R$ ${betAmount},00 realizada com sucesso!`;
      if (selectedBetType) {
        betMessage += ` Tipo: ${selectedBetType}`;
      } else if (selectedTab === "bicho" && selectedAnimal) {
        betMessage += ` Bicho: ${selectedAnimal.name}`;
      } else if (selectedTab === "numero" && selectedNumber !== null) {
        betMessage += ` Número: ${selectedNumber}`;
      }
      
      // Show potential win if available in response
      if (response.data.aposta && response.data.aposta.potentialWin) {
        betMessage += `. Ganho potencial: R$ ${response.data.aposta.potentialWin.toFixed(2)}`;
      }

      toast({
        title: "Aposta Realizada",
        description: betMessage,
      });
      
      // Limpar campos após apostar
      setBetAmount("5");
      
      // Refresh page to update balance
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      
    } catch (error) {
      console.error("Failed to place bet:", error);
      toast({
        title: "Erro ao realizar aposta",
        description: "Ocorreu um erro ao processar sua aposta. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    betAmount,
    betType,
    isSubmitting,
    handleBetAmountChange,
    handleBetTypeChange,
    handlePlaceBet
  };
};
