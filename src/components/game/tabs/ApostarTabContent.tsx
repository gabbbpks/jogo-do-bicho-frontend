
import { useState, useEffect } from "react";
import QuickBetSection from "../QuickBetSection";
import BetTypeSelection from "../BetTypeSelection";
import BetForm from "../BetForm";
import Extracoes from "@/components/Extracoes";
import NumberSelectionContainer from "../NumberSelectionContainer";
import { useBetTypeSelection } from "@/hooks/useBetTypeSelection";
import { useNumberSelection } from "@/hooks/useNumberSelection";
import { useDrawSelection } from "@/hooks/useDrawSelection";

const ApostarTabContent = () => {
  // Use our custom hooks for different parts of the functionality
  const { selectedBetType, maxSelections, currentFormat, handleBetTypeSelect } = useBetTypeSelection();
  
  const { selectedNumbers, handleNumberSelect, handleNumeroPorTipoChange } = 
    useNumberSelection({ maxSelections, currentFormat });
  
  const { selectedPrizes, selectedDrawTime, handleDrawTimeSelect, handlePrizeSelect } = useDrawSelection();
  
  return (
    <>
      <QuickBetSection />
      <BetTypeSelection 
        selectedBetType={selectedBetType} 
        onSelectBetType={handleBetTypeSelect} 
      />
      
      {selectedBetType && (
        <NumberSelectionContainer 
          selectedBetType={selectedBetType}
          selectedNumbers={selectedNumbers}
          onSelectNumber={handleNumberSelect}
          onNumeroPorTipoChange={handleNumeroPorTipoChange}
          maxSelections={maxSelections}
          currentFormat={currentFormat}
        />
      )}
      
      <div className="mt-6">
        <Extracoes 
          onSelect={handleDrawTimeSelect}
          selectedDrawTime={selectedDrawTime}
        />
      </div>
      
      {selectedBetType && selectedNumbers.length > 0 && (
        <BetForm
          selectedTab="bicho"
          selectedAnimal={null}
          selectedNumber={null}
          selectedBetType={selectedBetType}
          selectedNumbers={selectedNumbers}
          selectedPrizes={selectedPrizes}
          selectedDrawTime={selectedDrawTime}
        />
      )}
    </>
  );
};

export default ApostarTabContent;
