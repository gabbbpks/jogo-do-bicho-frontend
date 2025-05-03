
import React from 'react';

interface PrizeOptionProps {
  opcao: string;
  selecionada: boolean;
  onClick: () => void;
}

const PrizeOption: React.FC<PrizeOptionProps> = ({
  opcao,
  selecionada,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 border rounded-md text-xs font-medium ${
        selecionada
          ? 'bg-blue-600 text-white border-blue-700'
          : 'bg-[#0f0f1b] text-gray-300 border-[#1e1f2e] hover:bg-[#141423]'
      }`}
    >
      {opcao}
    </button>
  );
};

export default PrizeOption;
