
import { useState } from "react";
import { Button } from "@/components/ui/button";
import NumberGrid from "./number-selection/NumberGrid";
import { getNumberButtonClasses } from "./number-selection/numberSelectionUtils";

interface BetNumbersSectionProps {
  selectedNumbers: number[];
  onSelectNumber: (number: number) => void;
}

const BetNumbersSection = ({ selectedNumbers, onSelectNumber }: BetNumbersSectionProps) => {
  // Function to check if number selection is disabled
  const isSelectionDisabled = (num: number) => {
    // If the number is already selected, always allow it to be deselected
    if (selectedNumbers.includes(num)) return false;
    
    // We don't have max selections here like in NumberSelectionSection
    return false;
  };

  // Get display label for numbers when needed
  const getNumberDisplayLabel = (num: number) => {
    return num.toString();
  };

  return (
    <div className="bg-[#1c1c28] border border-[#2A2D45] rounded-lg p-6 mb-6">
      <h2 className="text-lg font-bold text-white mb-2 flex items-center">
        <span className="w-6 h-6 bg-[#3B82F6] rounded-full flex items-center justify-center mr-2 text-xs text-white">2</span>
        Em qual(is) número(s) quer apostar?
      </h2>
      <p className="text-gray-200 text-sm mb-4">
        Escolha quantas opções quiser. Quanto mais chances, menor o retorno.
      </p>
      
      <NumberGrid 
        onSelectNumber={onSelectNumber}
        selectedNumbers={selectedNumbers}
        isSelectionDisabled={isSelectionDisabled}
        getNumberButtonClasses={(num) => getNumberButtonClasses(num, selectedNumbers)}
        getNumberDisplayLabel={getNumberDisplayLabel}
      />

      <p className="text-sm text-gray-400">
        A seleção de jogos atual pode bloquear algumas extrações
      </p>
    </div>
  );
};

export default BetNumbersSection;
