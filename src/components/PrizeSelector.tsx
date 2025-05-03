
import React from 'react';
import PrizeOption from './prize/PrizeOption';
import PrizeContainer from './prize/PrizeContainer';

interface PrizeSelectorProps {
  opcoes: string[];
  selecionadas: string[];
  onSelecionar: (lista: string[]) => void;
  desabilitar?: boolean;
}

const PrizeSelector: React.FC<PrizeSelectorProps> = ({
  opcoes,
  selecionadas,
  onSelecionar,
  desabilitar = false,
}) => {
  const toggleOpcao = (opcao: string) => {
    if (desabilitar) return;
    if (selecionadas.includes(opcao)) {
      onSelecionar(selecionadas.filter((item) => item !== opcao));
    } else {
      onSelecionar([...selecionadas, opcao]);
    }
  };

  return (
    <PrizeContainer>
      {opcoes.map((opcao, index) => (
        <PrizeOption
          key={index}
          opcao={opcao}
          selecionada={selecionadas.includes(opcao)}
          onClick={() => toggleOpcao(opcao)}
        />
      ))}
    </PrizeContainer>
  );
};

export default PrizeSelector;
