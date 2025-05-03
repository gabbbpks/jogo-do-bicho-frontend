
import { useState } from "react";
import NumberSelectionSection from "./NumberSelectionSection";
import NumeroPorTipo from "@/components/NumeroPorTipo";

interface NumberSelectionContainerProps {
  selectedBetType: string | null;
  selectedNumbers: number[];
  onSelectNumber: (number: number) => void;
  onNumeroPorTipoChange: (numeros: string[]) => void;
  maxSelections: number;
  currentFormat: string;
}

const NumberSelectionContainer = ({
  selectedBetType,
  selectedNumbers,
  onSelectNumber,
  onNumeroPorTipoChange,
  maxSelections,
  currentFormat
}: NumberSelectionContainerProps) => {
  if (!selectedBetType) return null;
  
  if (["milhar", "centena", "dezena", "grupo"].includes(selectedBetType)) {
    return (
      <NumeroPorTipo 
        tipo={selectedBetType as 'milhar' | 'centena' | 'dezena' | 'grupo'} 
        onChange={onNumeroPorTipoChange}
      />
    );
  } else {
    return (
      <NumberSelectionSection 
        selectedNumbers={selectedNumbers} 
        onSelectNumber={onSelectNumber} 
        maxSelections={maxSelections}
        format={currentFormat}
        selectedBetType={selectedBetType}
      />
    );
  }
};

export default NumberSelectionContainer;
