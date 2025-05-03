
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, RefreshCw } from "lucide-react";

interface Props {
  tipo: 'milhar' | 'centena' | 'dezena' | 'grupo';
  onChange: (numeros: string[]) => void;
}

const limites = {
  milhar: 4,
  centena: 3,
  dezena: 2,
  grupo: 2,
};

const tipoLabels = {
  milhar: "Milhar",
  centena: "Centena", 
  dezena: "Dezena",
  grupo: "Grupo"
};

const NumeroPorTipo: React.FC<Props> = ({ tipo, onChange }) => {
  const [digitos, setDigitos] = useState<string[]>([]);
  const [confirmados, setConfirmados] = useState<string[]>([]);
  const max = limites[tipo];

  const handleDigito = (d: string) => {
    if (digitos.length < max) {
      setDigitos([...digitos, d]);
    }
  };

  const removerDigito = (index: number) => {
    setDigitos(digitos.filter((_, i) => i !== index));
  };

  const limparTudo = () => {
    setDigitos([]);
    setConfirmados([]);
    onChange([]);
  };

  const confirmarNumero = () => {
    if (digitos.length !== max) {
      alert(`Você precisa escolher exatamente ${max} dígitos.`);
      return;
    }

    const numero = digitos.join('');
    const atualizados = [...confirmados, numero];
    setConfirmados(atualizados);
    onChange(atualizados);
    setDigitos([]);
  };

  const removerConfirmado = (index: number) => {
    const atualizados = confirmados.filter((_, i) => i !== index);
    setConfirmados(atualizados);
    onChange(atualizados);
  };

  // Generate a random set of digits
  const gerarAleatorio = () => {
    const novoDigitos: string[] = [];
    while (novoDigitos.length < max) {
      const randomDigit = Math.floor(Math.random() * 10).toString();
      novoDigitos.push(randomDigit);
    }
    setDigitos(novoDigitos);
  };

  return (
    <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">{tipoLabels[tipo]}</h3>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs border-[#3B82F6] text-blue-400 hover:bg-blue-900/20"
            onClick={gerarAleatorio}
          >
            <RefreshCw className="w-3 h-3 mr-1" /> Aleatório
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs border-red-500/30 text-red-400 hover:bg-red-900/20"
            onClick={limparTudo}
          >
            <X className="w-3 h-3 mr-1" /> Limpar
          </Button>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-3">Escolha {max} números para completar seu {tipoLabels[tipo].toLowerCase()}:</p>

      <div className="grid grid-cols-5 gap-3 mb-4">
        {Array.from({ length: 10 }, (_, i) => (
          <button
            key={i}
            className={`rounded-lg p-4 text-center text-xl font-bold transition-colors text-white
              ${digitos.includes(i.toString()) 
                ? 'bg-[#3B82F6]/20 border border-[#3B82F6]' 
                : 'bg-[#12111F] border border-[#2A2D45] hover:bg-[#2A2D45] hover:border-[#3B82F6]'
              }
              ${digitos.length >= max && !digitos.includes(i.toString()) ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={() => handleDigito(i.toString())}
            disabled={digitos.length >= max && !digitos.includes(i.toString())}
          >
            {i}
          </button>
        ))}
      </div>

      {digitos.length > 0 && (
        <div className="mb-6 p-3 bg-[#12111F] border border-[#2A2D45] rounded-lg">
          <p className="text-sm font-semibold text-white mb-2">Dígitos selecionados:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {digitos.map((d, i) => (
              <div key={i} className="relative">
                <span className="px-3 py-1 bg-[#3B82F6]/20 border border-[#3B82F6] rounded-lg text-white">
                  {d}
                  <span className="text-xs ml-1 text-gray-400">({i+1}°)</span>
                </span>
                <button
                  onClick={() => removerDigito(i)}
                  className="absolute -top-2 -right-2 bg-red-500 rounded-full p-0.5"
                  aria-label="Remover dígito"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-4 flex items-center justify-center">
            <div className="px-4 py-2 bg-[#3B82F6]/20 border border-[#3B82F6] rounded-lg text-xl font-bold text-white">
              {digitos.join('')}
            </div>
          </div>
        </div>
      )}

      <Button 
        onClick={confirmarNumero} 
        disabled={digitos.length !== max}
        className="w-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white"
      >
        {digitos.length === max ? `Confirmar ${tipoLabels[tipo]}` : `Selecione ${max - digitos.length} dígito(s) restante(s)`}
      </Button>

      {confirmados.length > 0 && (
        <div className="mt-6 p-3 bg-[#12111F] border border-[#2A2D45] rounded-lg">
          <p className="text-sm font-semibold text-white mb-2">Números confirmados:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {confirmados.map((num, i) => (
              <div key={i} className="relative">
                <span className="px-3 py-1 bg-[#3B82F6]/20 border border-[#3B82F6] rounded-lg text-white">
                  {num}
                </span>
                <button
                  onClick={() => removerConfirmado(i)}
                  className="absolute -top-2 -right-2 bg-red-500 rounded-full p-0.5"
                  aria-label="Remover número"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NumeroPorTipo;
