
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface UseNumberSelectionProps {
  maxSelections: number;
  currentFormat: string;
}

export const useNumberSelection = ({ maxSelections, currentFormat }: UseNumberSelectionProps) => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const handleNumberSelect = (number: number) => {
    // If the number is already selected, remove it
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
      return;
    }
    
    // Handle adding the number based on format
    if (currentFormat === "sequence") {
      // For sequential formats (milhar, centena, dezena)
      if (selectedNumbers.length < maxSelections) {
        // Add numbers in sequence
        setSelectedNumbers([...selectedNumbers, number]);
      } else {
        // Show toast if trying to select more than allowed
        toast({
          title: "Limite de seleção",
          description: `Você só pode selecionar ${maxSelections} números para este tipo de aposta.`,
          variant: "destructive"
        });
      }
    } else if (currentFormat === "multiple" || currentFormat === "multiple-group") {
      // For multiple selections (ternos, duques)
      if (selectedNumbers.length < maxSelections) {
        setSelectedNumbers([...selectedNumbers, number]);
      } else {
        toast({
          title: "Limite de seleção",
          description: `Você só pode selecionar ${maxSelections} números para este tipo de aposta.`,
          variant: "destructive"
        });
      }
    } else {
      // For single number (unidade, dezena-fortuna) or group (fazendinha)
      setSelectedNumbers([number]);
    }
  };

  const handleNumeroPorTipoChange = (numeros: string[]) => {
    if (numeros.length > 0) {
      // Get the last confirmed number (most recent)
      const ultimoNumero = numeros[numeros.length - 1];
      
      // Convert string of digits to array of numbers
      const numerosArray = ultimoNumero.split('').map(n => parseInt(n));
      setSelectedNumbers(numerosArray);
      
      toast({
        title: "Número confirmado",
        description: `${ultimoNumero} foi adicionado à sua aposta.`,
      });
    } else {
      // If all numbers were removed
      setSelectedNumbers([]);
    }
  };

  // Method to clear all selected numbers
  const clearSelectedNumbers = () => {
    setSelectedNumbers([]);
    
    toast({
      title: "Seleção limpa",
      description: "Todos os números foram removidos."
    });
  };
  
  // Method to set multiple numbers at once (for surpresinha)
  const setMultipleNumbers = (numbers: number[]) => {
    // Validate numbers against maxSelections
    const validNumbers = numbers.slice(0, maxSelections);
    setSelectedNumbers(validNumbers);
  };

  return {
    selectedNumbers,
    setSelectedNumbers,
    handleNumberSelect,
    handleNumeroPorTipoChange,
    clearSelectedNumbers,
    setMultipleNumbers
  };
};
