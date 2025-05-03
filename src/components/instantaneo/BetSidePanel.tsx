
import React from 'react';
import BetPanel from '@/components/instantaneo/BetPanel';

interface BetSidePanelProps {
  selectedBicho: string;
  valor: string;
  setValor: (value: string) => void;
  onApostar: () => Promise<void>;
  mensagem: string;
}

const BetSidePanel: React.FC<BetSidePanelProps> = ({ 
  selectedBicho, 
  valor, 
  setValor, 
  onApostar, 
  mensagem 
}) => {
  return (
    <BetPanel
      selectedBicho={selectedBicho}
      valor={valor}
      setValor={setValor}
      onApostar={onApostar}
      mensagem={mensagem}
    />
  );
};

export default BetSidePanel;
