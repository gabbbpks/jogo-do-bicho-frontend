
import { Card, CardContent } from "@/components/ui/card";
import { Animal } from "@/data/animals";
import { useBetForm } from "@/hooks/useBetForm";
import BetFormSummary from "./bet-form/BetFormSummary";
import BetFormControls from "./bet-form/BetFormControls";
import ConfirmBetButton from "./bet-form/ConfirmBetButton";

interface BetFormProps {
  selectedTab: string;
  selectedAnimal: Animal | null;
  selectedNumber: number | null;
  selectedBetType?: string | null;
  selectedNumbers?: number[];
  selectedPrizes?: string[];
  selectedDrawTime?: string;
}

const BetForm = ({ 
  selectedTab, 
  selectedAnimal, 
  selectedNumber, 
  selectedBetType,
  selectedNumbers = [],
  selectedPrizes = ["1"],
  selectedDrawTime = "10h Bahia"
}: BetFormProps) => {
  const {
    betAmount,
    betType,
    isSubmitting,
    handleBetAmountChange,
    handleBetTypeChange,
    handlePlaceBet
  } = useBetForm({
    selectedTab,
    selectedAnimal,
    selectedNumber,
    selectedBetType,
    selectedNumbers,
    selectedPrizes,
    selectedDrawTime
  });

  return (
    <div className="p-6 mt-6 border border-[#2A2D45] rounded-lg bg-[#1E1D2E]">
      <h2 className="mb-4 text-xl font-semibold text-white">Detalhes da Aposta</h2>
      
      <BetFormSummary
        selectedBetType={selectedBetType}
        selectedNumbers={selectedNumbers}
        selectedPrizes={selectedPrizes}
        selectedDrawTime={selectedDrawTime}
      />
      
      <BetFormControls
        betAmount={betAmount}
        betType={betType}
        selectedBetType={selectedBetType}
        onBetAmountChange={handleBetAmountChange}
        onBetTypeChange={handleBetTypeChange}
      />

      <ConfirmBetButton
        isSubmitting={isSubmitting}
        onClick={handlePlaceBet}
      />
    </div>
  );
};

export default BetForm;
