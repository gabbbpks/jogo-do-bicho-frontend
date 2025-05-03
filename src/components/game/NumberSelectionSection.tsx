
import { useState } from "react";
import SurpresinhaPicker from "./SurpresinhaPicker";
import { toast } from "@/hooks/use-toast";
import NumberGrid from "./number-selection/NumberGrid";
import SelectedNumbersDisplay from "./number-selection/SelectedNumbersDisplay";
import ClearSelectionButton from "./number-selection/ClearSelectionButton";
import { getBetTypeText, getNumberButtonClasses } from "./number-selection/numberSelectionUtils";

interface NumberSelectionSectionProps {
  selectedNumbers: number[];
  onSelectNumber: (number: number) => void;
  maxSelections?: number;
  format?: string;
  selectedBetType: string | null;
}

const NumberSelectionSection = ({ 
  selectedNumbers, 
  onSelectNumber, 
  maxSelections = 1,
  format = "single",
  selectedBetType
}: NumberSelectionSectionProps) => {
  
  const handleSurpresinha = (count: number) => {
    // Don't generate more than allowed max selections
    const actualCount = Math.min(count, maxSelections);
    
    // Generate random unique numbers
    const randomNumbers: number[] = [];
    while (randomNumbers.length < actualCount) {
      const randomNum = Math.floor(Math.random() * 10);
      if (!randomNumbers.includes(randomNum)) {
        randomNumbers.push(randomNum);
      }
    }
    
    // Clear previous selection
    selectedNumbers.forEach(num => {
      if (!randomNumbers.includes(num)) {
        onSelectNumber(num); // Deselect by toggling
      }
    });
    
    // Set new random numbers
    randomNumbers.forEach(num => {
      if (!selectedNumbers.includes(num)) {
        onSelectNumber(num);
      }
    });
    
    toast({
      title: "Surpresinha gerada!",
      description: `${actualCount} número(s) gerado(s) aleatoriamente.`,
    });
  };

  const isSelectionDisabled = (num: number) => {
    // If the number is already selected, always allow it to be deselected
    if (selectedNumbers.includes(num)) return false;
    
    // If we've reached the max number of selections, disable further selections
    if (selectedNumbers.length >= maxSelections) {
      return true;
    }
    
    return false;
  };

  // Get display label for numbers when needed
  const getNumberDisplayLabel = (num: number) => {
    return num.toString();
  };

  return (
    <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6 mb-6">
      <h2 className="text-lg font-bold text-white mb-2 flex items-center">
        <span className="w-6 h-6 bg-[#3B82F6] rounded-full flex items-center justify-center mr-2 text-xs text-white">2</span>
        Em qual(is) número(s) quer apostar?
      </h2>
      <p className="text-sm text-gray-400 mb-4">
        {getBetTypeText(format, maxSelections, selectedBetType)}
      </p>

      <SurpresinhaPicker 
        onGenerateNumbers={handleSurpresinha} 
        maxCount={maxSelections}
      />

      <NumberGrid 
        onSelectNumber={onSelectNumber}
        selectedNumbers={selectedNumbers}
        isSelectionDisabled={isSelectionDisabled}
        getNumberButtonClasses={(num) => getNumberButtonClasses(num, selectedNumbers)}
        getNumberDisplayLabel={getNumberDisplayLabel}
      />

      <SelectedNumbersDisplay
        selectedNumbers={selectedNumbers}
        onSelectNumber={onSelectNumber}
        format={format}
        selectedBetType={selectedBetType}
      />

      <ClearSelectionButton 
        selectedNumbers={selectedNumbers}
        onSelectNumber={onSelectNumber}
      />

      <p className="text-sm text-gray-500 mt-4">
        A seleção de jogos atual pode bloquear algumas extrações
      </p>
    </div>
  );
};

export default NumberSelectionSection;
