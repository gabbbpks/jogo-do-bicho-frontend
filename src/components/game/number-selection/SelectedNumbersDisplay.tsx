
import React from "react";
import { CircleX } from "lucide-react";
import { getBetTypeLabel } from "@/utils/betOptions";

interface SelectedNumbersDisplayProps {
  selectedNumbers: number[];
  onSelectNumber: (number: number) => void;
  format: string;
  selectedBetType: string | null;
}

const SelectedNumbersDisplay: React.FC<SelectedNumbersDisplayProps> = ({
  selectedNumbers,
  onSelectNumber,
  format,
  selectedBetType
}) => {
  if (!selectedNumbers.length) return null;
  
  if (format === "sequence") {
    const sequence = selectedNumbers.join('');
    return (
      <div className="mt-4 p-3 bg-[#12111F] border border-[#2A2D45] rounded-lg">
        <h3 className="text-sm font-semibold text-white mb-2">Sequência selecionada:</h3>
        <div className="flex items-center justify-center">
          <div className="px-4 py-2 bg-[#3B82F6]/20 border border-[#3B82F6] rounded-lg text-xl font-bold text-white">
            {sequence}
          </div>
        </div>
        <p className="text-sm text-green-400 mt-2 text-center">
          {getBetTypeLabel(selectedBetType)}: {sequence}
        </p>
      </div>
    );
  } else {
    return (
      <div className="mt-4 p-3 bg-[#12111F] border border-[#2A2D45] rounded-lg">
        <h3 className="text-sm font-semibold text-white mb-2">Números selecionados:</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {selectedNumbers.map((num, idx) => (
            <div key={idx} className="relative flex items-center">
              <span className="px-3 py-1 bg-[#3B82F6]/20 border border-[#3B82F6] rounded-lg text-white">
                {num}
                {format === "sequence" && <span className="text-xs ml-1 text-gray-400">({idx+1}°)</span>}
              </span>
              <button
                className="absolute -top-2 -right-2 bg-red-500 rounded-full p-0.5"
                onClick={() => onSelectNumber(num)}
                aria-label="Remover número"
              >
                <CircleX className="h-4 w-4 text-white" />
              </button>
            </div>
          ))}
        </div>
        
        {selectedBetType && (
          <p className="text-sm text-green-400 mt-2 text-center">
            {getBetTypeLabel(selectedBetType)}: {selectedNumbers.join(', ')}
          </p>
        )}
      </div>
    );
  }
};

export default SelectedNumbersDisplay;
