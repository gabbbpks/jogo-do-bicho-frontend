
import React from 'react';
import BichoMascot from './BichoMascot';

interface BichoGridProps {
  bichos: string[];
  selecionado: string;
  onSelecionar: (bicho: string) => void;
}

const BichoGrid: React.FC<BichoGridProps> = ({ bichos, selecionado, onSelecionar }) => {
  // Map bicho names to mascot types
  const getMascotType = (bichoName: string): 'tiger' | 'lion' | 'elephant' | 'eagle' => {
    const nameToType: Record<string, 'tiger' | 'lion' | 'elephant' | 'eagle'> = {
      'Leão': 'lion',
      'Tigre': 'tiger',
      'Elefante': 'elephant',
      'Águia': 'eagle',
      // Adding more mappings would require more mascot types
    };
    
    return nameToType[bichoName] || 'tiger';
  };
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 relative z-10">
      {bichos.map((bicho, idx) => (
        <button
          key={idx}
          onClick={() => onSelecionar(bicho)}
          className={`p-4 rounded-xl border flex flex-col items-center transition-all ${
            selecionado === bicho 
              ? 'border-[#6A48F3] bg-[#6A48F3]/20 text-white scale-105 shadow-lg shadow-[#6A48F3]/20' 
              : 'border-[#2A2D45] bg-[#12111F]/70 text-gray-300 hover:bg-[#2A2D45]/30 hover:border-[#6A48F3]/50'
          }`}
        >
          <div className="mb-2">
            <BichoMascot 
              type={getMascotType(bicho)} 
              className={`transition-transform ${selecionado === bicho ? 'scale-110' : ''}`}
            />
          </div>
          <span className="text-sm font-medium">{bicho}</span>
          <span className="text-xs text-gray-500">{idx + 1}</span>
        </button>
      ))}
    </div>
  );
};

export default BichoGrid;
