
import React from "react";

interface BetFormSummaryProps {
  selectedBetType: string | null;
  selectedNumbers: number[];
  selectedPrizes: string[];
  selectedDrawTime: string;
}

const BetFormSummary = ({
  selectedBetType,
  selectedNumbers,
  selectedPrizes,
  selectedDrawTime,
}: BetFormSummaryProps) => {
  // Format selected numbers for display
  const formattedNumbers = selectedNumbers.length > 0 
    ? selectedNumbers.map(n => n.toString()).join(', ')
    : "Nenhum número selecionado";

  return (
    <div className="mb-4 p-3 bg-[#12111F] border border-[#2A2D45] rounded-lg">
      <h3 className="text-sm font-semibold text-white mb-2">Sua Aposta:</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-400">Tipo:</p>
          <p className="font-medium">{selectedBetType || "Normal"}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Números:</p>
          <p className="font-medium">{formattedNumbers}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Prêmios:</p>
          <p className="font-medium">{selectedPrizes.join(', ')}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Extração:</p>
          <p className="font-medium">{selectedDrawTime}</p>
        </div>
      </div>
    </div>
  );
};

export default BetFormSummary;
