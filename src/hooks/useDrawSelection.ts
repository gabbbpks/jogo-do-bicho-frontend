
import { useState } from "react";

export const useDrawSelection = () => {
  const [selectedPrizes, setSelectedPrizes] = useState<string[]>(["1"]);
  const [selectedDrawTime, setSelectedDrawTime] = useState<string>("10h Bahia");

  const handleDrawTimeSelect = (time: string) => {
    setSelectedDrawTime(time);
  };

  const handlePrizeSelect = (prizes: string[]) => {
    setSelectedPrizes(prizes);
  };

  return {
    selectedPrizes,
    setSelectedPrizes,
    selectedDrawTime,
    setSelectedDrawTime,
    handleDrawTimeSelect,
    handlePrizeSelect
  };
};
