
import React from 'react';
import { Animal } from '@/data/animals';

interface BichoIconProps {
  animal: Animal;
  selected: boolean;
  onClick: () => void;
}

const BichoIcon: React.FC<BichoIconProps> = ({ animal, selected, onClick }) => {
  // Map animal names to emoji representations (as 3D cartoon placeholder)
  const getAnimalEmoji = (name: string): string => {
    const emojiMap: Record<string, string> = {
      "Avestruz": "🦢",
      "Águia": "🦅",
      "Burro": "🐴", 
      "Borboleta": "🦋",
      "Cachorro": "🐕",
      "Cabra": "🐐",
      "Carneiro": "🐑",
      "Camelo": "🐫",
      "Cobra": "🐍",
      "Coelho": "🐰",
      "Cavalo": "🐎",
      "Elefante": "🐘",
      "Galo": "🐓",
      "Gato": "🐈",
      "Jacaré": "🐊",
      "Leão": "🦁",
      "Macaco": "🐒",
      "Porco": "🐖",
      "Pavão": "🦚",
      "Peru": "🦃",
      "Touro": "🐂",
      "Tigre": "🐅",
      "Urso": "🐻",
      "Veado": "🦌",
      "Vaca": "🐄"
    };
    
    return emojiMap[name] || "🐾";
  };

  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl border flex flex-col items-center transition-all ${
        selected 
          ? 'border-[#6A48F3] bg-[#6A48F3]/20 text-white scale-105' 
          : 'border-[#2A2D45] bg-[#12111F]/70 text-gray-300 hover:bg-[#2A2D45]/30 hover:border-[#6A48F3]/50'
      }`}
    >
      <div className="relative w-16 h-16 mb-2 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6A48F3]/30 to-[#10B981]/30 animate-pulse-glow"></div>
        <span className="text-4xl relative z-10">{getAnimalEmoji(animal.name)}</span>
      </div>
      <span className="text-sm font-medium">{animal.name}</span>
      <div className="flex flex-wrap justify-center gap-1 mt-1">
        {animal.numbers.map(num => (
          <span 
            key={num} 
            className="inline-flex items-center justify-center w-5 h-5 text-xs bg-[#2A2D45] rounded-full text-gray-300"
          >
            {num}
          </span>
        ))}
      </div>
    </button>
  );
};

export default BichoIcon;
