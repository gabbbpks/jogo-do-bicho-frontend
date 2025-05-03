
import { useState, useEffect } from "react";

export const useBetTypeSelection = () => {
  const [selectedBetType, setSelectedBetType] = useState<string | null>(null);
  const [maxSelections, setMaxSelections] = useState<number>(1);
  const [currentFormat, setCurrentFormat] = useState<string>("single");

  // Update maxSelections and format when bet type changes
  useEffect(() => {
    updateMaxSelectionsForBetType(selectedBetType);
  }, [selectedBetType]);

  const handleBetTypeSelect = (type: string) => {
    setSelectedBetType(type);
    // Reset selected numbers when changing bet type
    updateMaxSelectionsForBetType(type);
  };
  
  const updateMaxSelectionsForBetType = (betType: string | null) => {
    if (!betType) {
      setMaxSelections(1);
      setCurrentFormat("single");
      return;
    }
    
    switch(betType) {
      case "milhar":
        setMaxSelections(4);
        setCurrentFormat("sequence");
        break;
      case "centena":
        setMaxSelections(3);
        setCurrentFormat("sequence");
        break;
      case "dezena":
        setMaxSelections(2);
        setCurrentFormat("sequence");
        break;
      case "fazendinha":
        setMaxSelections(1);
        setCurrentFormat("group");
        break;
      case "terno-dezena":
        setMaxSelections(3);
        setCurrentFormat("multiple");
        break;
      case "terno-grupo":
        setMaxSelections(3);
        setCurrentFormat("multiple-group");
        break;
      case "duque-dezena":
        setMaxSelections(2);
        setCurrentFormat("multiple");
        break;
      case "duque-grupo":
        setMaxSelections(2);
        setCurrentFormat("multiple-group");
        break;
      case "dezena-fortuna":
        setMaxSelections(1);
        setCurrentFormat("single");
        break;
      case "unidade":
        setMaxSelections(1);
        setCurrentFormat("single");
        break;
      default:
        setMaxSelections(1);
        setCurrentFormat("single");
    }
  };

  return {
    selectedBetType,
    setSelectedBetType,
    maxSelections,
    currentFormat,
    handleBetTypeSelect,
  };
};
