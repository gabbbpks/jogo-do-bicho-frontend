
import React from "react";
import BetAmountInput from "../BetAmountInput";
import BetTypeSelector from "../BetTypeSelector";
import BetOddsDisplay from "../BetOddsDisplay";
import { getBetOdds, getBetOddsValue } from "@/utils/betOptions";

interface BetFormControlsProps {
  betAmount: string;
  betType: string;
  selectedBetType: string | null;
  onBetAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBetTypeChange: (value: string) => void;
}

const BetFormControls = ({
  betAmount,
  betType,
  selectedBetType,
  onBetAmountChange,
  onBetTypeChange,
}: BetFormControlsProps) => {
  // Get odds for display
  const odds = getBetOdds(selectedBetType);
  const oddsValue = getBetOddsValue(selectedBetType);
  const betValue = parseInt(betAmount) || 0;
  const potentialWin = oddsValue ? oddsValue * betValue : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <BetAmountInput 
          betAmount={betAmount} 
          onChange={onBetAmountChange} 
        />
        <BetTypeSelector 
          betType={betType} 
          onChange={onBetTypeChange} 
          selectedBetType={selectedBetType} 
        />
      </div>
      
      <BetOddsDisplay odds={odds} potentialWin={potentialWin} />
    </>
  );
};

export default BetFormControls;
