
import React from "react";
import { Button } from "@/components/ui/button";
import { CirclePlus, CircleMinus } from "lucide-react";

interface AmountControlsProps {
  amount: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const AmountControls = ({ amount, onIncrease, onDecrease }: AmountControlsProps) => {
  // Parse current amount to check if decrease should be disabled
  const currentAmount = parseFloat(amount.replace(',', '.'));
  const isMinAmount = currentAmount <= 5; // Minimum bet amount is 5
  const isMaxAmount = currentAmount >= 100; // Maximum bet amount is 100
  
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-400">Valor da aposta</label>
      <div className="flex items-center">
        <Button 
          variant="outline" 
          size="icon"
          className={`h-10 w-10 bg-[#0a0a14] border-[#3B82F6] text-white ${isMinAmount ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={onDecrease}
          disabled={isMinAmount}
          aria-label="Diminuir valor"
        >
          <CircleMinus className="h-4 w-4" />
        </Button>
        <div className="flex-1 px-3 py-2 text-center border-y border-[#2A2D45] bg-[#0a0a14] font-bold">
          R$ {amount}
        </div>
        <Button 
          variant="outline" 
          size="icon"
          className={`h-10 w-10 bg-[#0a0a14] border-[#3B82F6] text-white ${isMaxAmount ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={onIncrease}
          disabled={isMaxAmount}
          aria-label="Aumentar valor"
        >
          <CirclePlus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AmountControls;
