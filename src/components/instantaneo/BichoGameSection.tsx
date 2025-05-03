
import React from 'react';
import BichoIcon from '../BichoIcon';
import { animals } from '@/data/animals';

interface BichoGameSectionProps {
  selectedBicho: string;
  setSelectedBicho: (bicho: string) => void;
}

const BichoGameSection: React.FC<BichoGameSectionProps> = ({ 
  selectedBicho, 
  setSelectedBicho 
}) => {
  return (
    <div className="glass-card p-6 mb-6 relative overflow-hidden backdrop-blur-md">
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#6A48F3]/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#10B981]/10 blur-3xl"></div>
      <h2 className="text-xl font-bold mb-4 relative z-10">Escolha um Bicho para Apostar</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 relative z-10">
        {animals.map((animal) => (
          <BichoIcon 
            key={animal.id}
            animal={animal}
            selected={selectedBicho === animal.name}
            onClick={() => setSelectedBicho(animal.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default BichoGameSection;
