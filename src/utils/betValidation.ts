
import { toast } from "@/hooks/use-toast";
import { Animal } from "@/data/animals";

interface BetValidationProps {
  isAuthenticated: boolean;
  userId?: string;
  selectedBetType?: string | null;
  selectedNumbers?: number[];
  betAmount: string;
  selectedAnimal?: Animal | null;
  selectedNumber?: number | null;
  selectedTab?: string;
  selectedPrizes?: string[];
  drawTime?: string;
}

export const validateBet = ({
  isAuthenticated,
  userId,
  selectedBetType,
  selectedNumbers = [],
  betAmount,
  selectedAnimal,
  selectedNumber,
  selectedTab,
  selectedPrizes = [],
  drawTime
}: BetValidationProps): boolean => {
  // Check if user is authenticated
  if (!isAuthenticated) {
    toast({
      title: "Faça login",
      description: "É necessário estar logado para apostar.",
      variant: "destructive"
    });
    return false;
  }

  // Check if user ID exists
  if (!userId) {
    toast({
      title: "Erro",
      description: "Ocorreu um erro ao identificar seu usuário.",
      variant: "destructive"
    });
    return false;
  }

  // Check for bet amount
  if (!betAmount || isNaN(parseInt(betAmount)) || parseInt(betAmount) <= 0) {
    toast({
      title: "Valor inválido",
      description: "Por favor, insira um valor válido para apostar.",
      variant: "destructive"
    });
    return false;
  }

  // Check if prizes are selected
  if (!selectedPrizes || selectedPrizes.length === 0) {
    toast({
      title: "Selecione um prêmio",
      description: "Por favor, selecione pelo menos um prêmio para apostar.",
      variant: "destructive"
    });
    return false;
  }

  // Check if draw time is selected
  if (!drawTime) {
    toast({
      title: "Selecione um horário",
      description: "Por favor, selecione um horário de extração.",
      variant: "destructive"
    });
    return false;
  }

  // For structured bets
  if (selectedBetType) {
    // Check if numbers are selected based on bet type
    if (selectedNumbers.length === 0) {
      toast({
        title: "Selecione números",
        description: "Por favor, selecione os números para sua aposta.",
        variant: "destructive"
      });
      return false;
    }

    // Validate specific bet types
    switch (selectedBetType) {
      case "milhar":
        if (selectedNumbers.length !== 4) {
          toast({
            title: "Seleção incompleta",
            description: "Uma aposta de milhar precisa ter exatamente 4 números.",
            variant: "destructive"
          });
          return false;
        }
        break;
      case "centena":
        if (selectedNumbers.length !== 3) {
          toast({
            title: "Seleção incompleta",
            description: "Uma aposta de centena precisa ter exatamente 3 números.",
            variant: "destructive"
          });
          return false;
        }
        break;
      case "dezena":
      case "duque-dezena":
        if (selectedNumbers.length !== 2) {
          toast({
            title: "Seleção incompleta",
            description: `Uma aposta de ${selectedBetType} precisa ter exatamente 2 números.`,
            variant: "destructive"
          });
          return false;
        }
        break;
      case "terno-dezena":
      case "terno-grupo":
        if (selectedNumbers.length !== 3) {
          toast({
            title: "Seleção incompleta",
            description: `Uma aposta de ${selectedBetType} precisa ter exatamente 3 números.`,
            variant: "destructive"
          });
          return false;
        }
        break;
    }
  } else if (selectedTab === "bicho") {
    // Check if animal is selected
    if (!selectedAnimal) {
      toast({
        title: "Selecione um bicho",
        description: "Por favor, selecione um bicho para apostar.",
        variant: "destructive"
      });
      return false;
    }
  } else if (selectedTab === "numero") {
    // Check if number is selected
    if (selectedNumber === null) {
      toast({
        title: "Selecione um número",
        description: "Por favor, selecione um número para apostar.",
        variant: "destructive"
      });
      return false;
    }
  }

  return true;
};
