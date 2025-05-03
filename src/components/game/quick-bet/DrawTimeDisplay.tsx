
import React from "react";
import { Clock, Calendar, Trophy } from "lucide-react";

interface DrawTimeDisplayProps {
  drawTime: string;
  prizes?: string[];
}

const DrawTimeDisplay = ({ drawTime, prizes = ["1"] }: DrawTimeDisplayProps) => {
  // Get current date
  const today = new Date();
  const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}`;
  
  // Format prizes for better display
  const formatPrizes = (prizes: string[]) => {
    if (prizes.length === 1) return `${prizes[0]}º Prêmio`;
    if (prizes.length <= 3) return prizes.map(p => `${p}º`).join(', ') + ' Prêmios';
    return `${prizes.length} Prêmios (${prizes[0]}º ao ${prizes[prizes.length-1]}º)`;
  };
  
  return (
    <div className="grid grid-cols-2 gap-3 bg-[#12111F] border border-[#2A2D45] rounded-lg p-4">
      <div>
        <p className="text-sm text-gray-400 flex items-center mb-1">
          <Trophy className="w-4 h-4 mr-1" /> Prêmio
        </p>
        <p className="font-medium">{formatPrizes(prizes)}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400 flex items-center mb-1">
          <Clock className="w-4 h-4 mr-1" /> Extração
        </p>
        <p className="font-medium">{drawTime}</p>
        <div className="flex items-center mt-1">
          <Calendar className="w-3 h-3 mr-1 text-gray-500" />
          <p className="text-xs text-gray-500">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default DrawTimeDisplay;
