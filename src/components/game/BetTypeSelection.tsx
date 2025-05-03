
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BetTypeSelectionProps {
  selectedBetType: string | null;
  onSelectBetType: (type: string) => void;
}

const BetTypeSelection = ({ selectedBetType, onSelectBetType }: BetTypeSelectionProps) => {
  const betTypes = [
    { 
      id: "unidade", 
      name: "Unidade", 
      letter: "U", 
      multiplier: "6x", 
      emoji: "🔢",
      description: "Aposte em um número final"
    },
    { 
      id: "milhar", 
      name: "Milhar", 
      letter: "M", 
      multiplier: "5.000x", 
      emoji: "🎲",
      description: "Aposte em 4 números"
    },
    { 
      id: "centena", 
      name: "Show de Centena", 
      letter: "C", 
      multiplier: "600x", 
      emoji: "💯",
      description: "Aposte em 3 números"
    },
    { 
      id: "dezena", 
      name: "Show de Dezena", 
      letter: "D", 
      multiplier: "60x", 
      emoji: "🔟",
      description: "Aposte em 2 números"
    },
    { 
      id: "fazendinha", 
      name: "Fazendinha", 
      letter: "F", 
      multiplier: "16x", 
      emoji: "🐄",
      description: "Aposte em um grupo de bichos"
    },
  ];
  
  const bottomBetTypes = [
    { 
      id: "terno-dezena", 
      name: "Terno Dezena", 
      letter: "TD", 
      multiplier: "8.000x",
      emoji: "🎯",
      description: "Aposte em 3 dezenas"
    },
    { 
      id: "terno-grupo", 
      name: "Terno Grupo", 
      letter: "TG", 
      multiplier: "100x",
      emoji: "🎭",
      description: "Aposte em 3 grupos"
    },
    { 
      id: "duque-dezena", 
      name: "Duque de Dezena", 
      letter: "DD", 
      multiplier: "300x",
      emoji: "🎪",
      description: "Aposte em 2 dezenas"
    },
    { 
      id: "duque-grupo", 
      name: "Duque de Grupo", 
      letter: "DG", 
      multiplier: "15x",
      emoji: "🎨",
      description: "Aposte em 2 grupos"
    },
    { 
      id: "dezena-fortuna", 
      name: "Dezena da Fortuna", 
      letter: "DF", 
      multiplier: "40.000x",
      emoji: "💰",
      description: "Aposte na dezena premiada"
    },
  ];

  return (
    <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6 mb-6">
      <h2 className="text-lg font-bold text-white mb-2 flex items-center">
        <span className="w-6 h-6 bg-[#3B82F6] rounded-full flex items-center justify-center mr-2 text-xs text-white">1</span>
        Escolha o tipo de aposta!
      </h2>
      <p className="text-sm text-gray-400 mb-4">
        Tem dúvidas? Acesse nossa página de Como Jogar
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-4">
        {betTypes.map((type) => (
          <div 
            key={type.id}
            className={`bg-[#12111F] border ${selectedBetType === type.id ? 'border-[#3B82F6]' : 'border-[#2A2D45]'} rounded-lg p-4 text-center hover:border-[#3B82F6] cursor-pointer transition-colors`}
            onClick={() => onSelectBetType(type.id)}
          >
            <div className="bg-[#2A2D45] text-[#3B82F6] text-xs font-bold rounded-full inline-block px-2 py-0.5 mb-2">
              {type.multiplier}
            </div>
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-[#2A2D45] flex items-center justify-center text-2xl">
                {type.emoji}
              </div>
            </div>
            <h3 className="text-sm font-medium text-white">{type.name}</h3>
            <p className="text-xs text-gray-400 mt-1">{type.description}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {bottomBetTypes.map((type) => (
          <div 
            key={type.id}
            className={`bg-[#12111F] border ${selectedBetType === type.id ? 'border-[#3B82F6]' : 'border-[#2A2D45]'} rounded-lg p-4 text-center hover:border-[#3B82F6] cursor-pointer transition-colors`}
            onClick={() => onSelectBetType(type.id)}
          >
            <div className="bg-[#2A2D45] text-[#3B82F6] text-xs font-bold rounded-full inline-block px-2 py-0.5 mb-2">
              {type.multiplier}
            </div>
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-[#2A2D45] flex items-center justify-center text-2xl">
                {type.emoji}
              </div>
            </div>
            <h3 className="text-sm font-medium text-white">{type.name}</h3>
            <p className="text-xs text-gray-400 mt-1">{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetTypeSelection;
