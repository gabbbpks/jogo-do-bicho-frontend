
import React from 'react';

type BichoMascotProps = {
  className?: string;
  type?: 'tiger' | 'lion' | 'elephant' | 'eagle';
}

const BichoMascot: React.FC<BichoMascotProps> = ({ className = '', type = 'tiger' }) => {
  // Emoji mapping for different mascot animals
  const mascots = {
    tiger: '🐯',
    lion: '🦁',
    elephant: '🐘',
    eagle: '🦅'
  };

  const selectedMascot = mascots[type];

  return (
    <div className={`relative inline-block ${className}`}>
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6A48F3] to-[#4F36B0] flex items-center justify-center shadow-lg">
        <span className="text-4xl">{selectedMascot}</span>
      </div>
      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center text-white text-sm font-bold shadow-md">
        {type === 'tiger' ? '01' : type === 'lion' ? '03' : type === 'elephant' ? '12' : '07'}
      </div>
    </div>
  );
};

export default BichoMascot;
