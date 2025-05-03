
import { useState, useEffect } from "react";
import InputCounter from "./number-selection/InputCounter";
import SurpresinhaButton from "./number-selection/SurpresinhaButton";
import GenerateButton from "./number-selection/GenerateButton";
import InfoTooltip from "./number-selection/InfoTooltip";
import { toast } from "@/hooks/use-toast";

interface SurpresinhaPickerProps {
  onGenerateNumbers: (count: number) => void;
  maxCount?: number;
}

const SurpresinhaPicker = ({ onGenerateNumbers, maxCount = 10 }: SurpresinhaPickerProps) => {
  const [numberCount, setNumberCount] = useState("1");
  
  // Update number count if it exceeds maxCount
  useEffect(() => {
    const count = parseInt(numberCount);
    if (count > maxCount) {
      setNumberCount(maxCount.toString());
    }
  }, [maxCount]);

  const handleCountChange = (value: string) => {
    setNumberCount(value);
  };

  const handleGenerateClick = () => {
    const count = parseInt(numberCount || "1");
    
    if (count > maxCount) {
      toast({
        title: "Limite excedido",
        description: `O máximo de números permitido é ${maxCount}.`,
        variant: "destructive"
      });
      setNumberCount(maxCount.toString());
      return;
    }

    if (count < 1) {
      toast({
        title: "Valor inválido",
        description: "O mínimo de números permitido é 1.",
        variant: "destructive"
      });
      setNumberCount("1");
      return;
    }
    
    onGenerateNumbers(count);
    
    toast({
      title: "Surpresinha gerada",
      description: `${count} número${count > 1 ? 's' : ''} gerado${count > 1 ? 's' : ''} aleatoriamente.`,
    });
  };

  return (
    <div className="bg-[#12111F] border border-[#2A2D45] rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-medium mr-2 text-white">Surpresinha</span>
          <InfoTooltip content="A surpresinha gera números aleatórios para você. Selecione quantos números deseja gerar." />
        </div>
        <div className="flex items-center">
          <InputCounter 
            value={numberCount}
            onChange={handleCountChange}
            min={1}
            max={maxCount}
          />
          <GenerateButton 
            onClick={handleGenerateClick}
            className="ml-2"
          />
          <SurpresinhaButton 
            onClick={handleGenerateClick}
            className="ml-2"
          />
        </div>
      </div>
      
      {maxCount < 10 && (
        <div className="mt-3 text-xs text-gray-400">
          Máximo de {maxCount} número{maxCount > 1 ? 's' : ''} para este tipo de aposta
        </div>
      )}
    </div>
  );
};

export default SurpresinhaPicker;
