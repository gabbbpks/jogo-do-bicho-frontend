
import React from "react";
import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ClearSelectionButtonProps {
  selectedNumbers: number[];
  onSelectNumber: (number: number) => void;
}

const ClearSelectionButton: React.FC<ClearSelectionButtonProps> = ({ 
  selectedNumbers, 
  onSelectNumber 
}) => {
  if (selectedNumbers.length === 0) return null;

  const handleClearSelection = () => {
    // Clear all selected numbers
    [...selectedNumbers].forEach(num => onSelectNumber(num));
    toast({
      title: "Seleção limpa",
      description: "Todos os números foram removidos da seleção.",
    });
  };

  return (
    <Button 
      variant="outline" 
      className="mt-4 w-full text-red-400 border-red-400/30 hover:bg-red-500/20"
      onClick={handleClearSelection}
    >
      Limpar seleção <CircleX className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default ClearSelectionButton;
