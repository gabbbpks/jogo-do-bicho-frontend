
import React from 'react';
import { Input } from "@/components/ui/input";

interface DepositoAmountSelectorProps {
  valor: string;
  setValor: React.Dispatch<React.SetStateAction<string>>;
}

const DepositoAmountSelector: React.FC<DepositoAmountSelectorProps> = ({ valor, setValor }) => {
  const valoresRapidos = [50, 100, 120, 200];

  const handleSelecionarValor = (v: number) => {
    setValor(v.toString());
  };

  const decrementValor = () => {
    const currentValue = parseInt(valor || '0');
    if (currentValue > 1) {
      setValor((currentValue - 1).toString());
    }
  };

  const incrementValor = () => {
    const currentValue = parseInt(valor || '0');
    setValor((currentValue + 1).toString());
  };

  return (
    <div className="bg-[#12131e] border border-[#2A2D45] rounded-lg p-6">
      <h2 className="text-lg font-medium mb-4">1. Escolha o valor do depósito</h2>
      
      <div className="flex items-center mb-4">
        <button 
          onClick={decrementValor}
          className="w-12 h-12 bg-[#0E0D1B] border border-[#2A2D45] rounded-l-md flex items-center justify-center text-xl"
        >
          -
        </button>
        <Input 
          type="text" 
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className="h-12 border-y border-[#2A2D45] rounded-none bg-[#0E0D1B] text-center text-lg"
        />
        <button 
          onClick={incrementValor}
          className="w-12 h-12 bg-[#0E0D1B] border border-[#2A2D45] rounded-r-md flex items-center justify-center text-xl"
        >
          +
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-3 mb-6">
        {valoresRapidos.map((v) => (
          <button
            key={v}
            onClick={() => handleSelecionarValor(v)}
            className="bg-[#0E0D1B] border border-[#2A2D45] hover:bg-[#1E1D2E] rounded-md py-2 text-sm font-medium"
          >
            +{v}
          </button>
        ))}
      </div>
      
      <p className="text-sm text-gray-400">
        Escolha quanto quer depositar a partir de R$ 1,00
      </p>
    </div>
  );
};

export default DepositoAmountSelector;
