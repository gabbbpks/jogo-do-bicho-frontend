
import React from 'react';
import ApostaForm from '../ApostaForm';
import BichoMascot from '../BichoMascot';
import { animals } from '@/data/animals';
import { Card } from '@/components/ui/card';

interface BetPanelProps {
  selectedBicho: string;
  valor: string;
  setValor: (value: string) => void;
  onApostar: () => Promise<void>;
  mensagem: string;
}

const BetPanel: React.FC<BetPanelProps> = ({ 
  selectedBicho, 
  valor, 
  setValor, 
  onApostar,
  mensagem 
}) => {
  return (
    <Card className="glass-card">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Fazer Aposta</h2>
        
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Bicho selecionado</h3>
          {selectedBicho ? (
            <div className="flex items-center bg-[#2A2D45]/50 p-3 rounded-lg mb-4">
              <BichoMascot 
                type={selectedBicho.toLowerCase() === 'leão' ? 'lion' : 
                      selectedBicho.toLowerCase() === 'tigre' ? 'tiger' :
                      selectedBicho.toLowerCase() === 'elefante' ? 'elephant' : 
                      selectedBicho.toLowerCase() === 'águia' ? 'eagle' : 'tiger'} 
                className="mr-3 w-12 h-12" 
              />
              <div>
                <p className="font-bold">{selectedBicho}</p>
                <p className="text-xs text-gray-400">
                  {animals.find(a => a.name === selectedBicho)?.numbers.join(', ')}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 italic mb-4">Nenhum bicho selecionado</p>
          )}
        </div>
        
        <ApostaForm
          valor={valor}
          setValor={setValor}
          onApostar={onApostar}
          mensagem={mensagem}
        />
      </div>
    </Card>
  );
};

export default BetPanel;
