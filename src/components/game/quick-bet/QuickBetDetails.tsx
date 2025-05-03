
import React from "react";

interface QuickBetDetailsProps {
  quickBet: {
    type: string;
    numbers: string[];
    prizes: string[];
    amount: string;
    drawTime: string;
  };
}

const QuickBetDetails = ({ quickBet }: QuickBetDetailsProps) => {
  return (
    <div className="py-4 space-y-4">
      <div className="bg-[#12111F] border border-[#2A2D45] rounded-lg p-4">
        <h3 className="text-lg font-medium mb-2">Detalhes da aposta</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-sm text-gray-400">Tipo de aposta</p>
            <p className="font-medium">{quickBet.type.charAt(0).toUpperCase() + quickBet.type.slice(1)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Valor</p>
            <p className="font-medium">R$ {quickBet.amount}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Números</p>
            <div className="flex gap-1">
              {quickBet.numbers.map((num, idx) => (
                <span key={idx} className="bg-[#3B82F6]/20 border border-[#3B82F6] px-2 py-1 rounded text-sm">{num}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400">Prêmios</p>
            <div className="flex gap-1">
              {quickBet.prizes.map((prize, idx) => (
                <span key={idx} className="bg-[#6A48F3]/20 border border-[#6A48F3] px-2 py-1 rounded text-sm">{prize}º</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#12111F] border border-[#2A2D45] rounded-lg p-4">
        <p className="text-sm">Ganho potencial:</p>
        <p className="text-xl font-bold text-yellow-300">R$ 120,00</p>
      </div>
    </div>
  );
};

export default QuickBetDetails;
