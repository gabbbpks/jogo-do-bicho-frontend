
import React from "react";
import QuickBetDetails from "./QuickBetDetails";
import AmountControls from "./AmountControls";
import DrawTimeDisplay from "./DrawTimeDisplay";

interface QuickBetContentProps {
  quickBet: {
    type: string;
    numbers: string[];
    prizes: string[];
    amount: string;
    drawTime: string;
  } | null;
  isLoading: boolean;
  betAmount: number;
  handleIncreaseAmount: () => void;
  handleDecreaseAmount: () => void;
}

const QuickBetContent = ({ 
  quickBet, 
  isLoading,
  betAmount,
  handleIncreaseAmount,
  handleDecreaseAmount
}: QuickBetContentProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3B82F6]"></div>
      </div>
    );
  }

  if (!quickBet) {
    return null;
  }

  return (
    <div className="py-4 space-y-4">
      <QuickBetDetails quickBet={quickBet} />
      
      {/* Controls section */}
      <div className="space-y-4">
        <AmountControls 
          amount={quickBet.amount.replace(',', '.')}
          onIncrease={handleIncreaseAmount}
          onDecrease={handleDecreaseAmount}
        />
        <DrawTimeDisplay drawTime={quickBet.drawTime} />
      </div>
    </div>
  );
};

export default QuickBetContent;
