
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface ApostaFormProps {
  valor: string;
  setValor: (val: string) => void;
  onApostar: () => void;
  mensagem: string;
}

const ApostaForm: React.FC<ApostaFormProps> = ({ valor, setValor, onApostar, mensagem }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-2">Valor da Aposta</h3>
        <div className="flex items-center mb-4">
          <div className="bg-[#12111F] text-gray-400 p-3 rounded-l-md border-y border-l border-[#2A2D45]">
            R$
          </div>
          <Input
            type="text"
            placeholder="Valor da aposta"
            className="bg-[#12111F] border-[#2A2D45] rounded-l-none flex-1"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[5, 10, 20, 50, 100, 200].map((amount) => (
            <button
              key={amount}
              onClick={() => setValor(amount.toString())}
              className={`text-sm p-2 rounded border ${
                parseInt(valor) === amount 
                  ? 'bg-[#6A48F3]/30 border-[#6A48F3] text-white' 
                  : 'bg-[#12111F] border-[#2A2D45] text-gray-400 hover:bg-[#2A2D45]/30'
              }`}
            >
              R$ {amount}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-[#2A2D45]/30 rounded-md">
        <div>
          <p className="text-sm text-gray-400">Possível Retorno:</p>
          <p className="text-xl font-bold text-yellow-400">R$ {(parseFloat(valor.replace(',', '.')) * 18).toFixed(2)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 text-right">Cotação</p>
          <p className="text-lg font-bold text-green-400">18x</p>
        </div>
      </div>

      <Button
        onClick={onApostar}
        className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white py-6 h-auto text-lg font-bold rounded-xl shadow-lg shadow-[#10B981]/20"
      >
        Apostar Agora
      </Button>

      {mensagem && (
        <div className="p-3 bg-yellow-500/20 border border-yellow-600/30 text-yellow-300 text-sm rounded-lg">
          {mensagem}
        </div>
      )}
    </div>
  );
};

export default ApostaForm;
