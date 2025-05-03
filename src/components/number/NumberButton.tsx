
import React from 'react';

interface NumberButtonProps {
  numero: string;
  selecionado: boolean;
  onClick: () => void;
}

const NumberButton: React.FC<NumberButtonProps> = ({
  numero,
  selecionado,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 border rounded-md text-sm font-bold ${
        selecionado
          ? 'bg-blue-600 text-white border-blue-700'
          : 'bg-[#1e1f2e] text-white border-gray-700 hover:bg-[#262736]'
      }`}
    >
      {numero}
    </button>
  );
};

export default NumberButton;
