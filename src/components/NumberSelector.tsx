
import React from 'react';
import NumberButton from './number/NumberButton';
import NumberGrid from './number/NumberGrid';

interface NumberSelectorProps {
  quantidade: number;
  selecionados: string[];
  onSelecionar: (numero: string) => void;
  maximo?: number;
  desabilitar?: boolean;
}

const NumberSelector: React.FC<NumberSelectorProps> = ({
  quantidade,
  selecionados,
  onSelecionar,
  maximo = 5,
  desabilitar = false,
}) => {
  const numeros = Array.from({ length: quantidade }, (_, i) => (i + 1).toString().padStart(2, '0'));
  
  const handleClick = (numero: string) => {
    if (desabilitar) return;
    if (selecionados.includes(numero)) {
      onSelecionar(selecionados.filter(n => n !== numero).join(','));
    } else if (selecionados.length < maximo) {
      onSelecionar([...selecionados, numero].join(','));
    }
  };

  return (
    <NumberGrid>
      {numeros.map((numero) => (
        <NumberButton
          key={numero}
          numero={numero}
          selecionado={selecionados.includes(numero)}
          onClick={() => handleClick(numero)}
        />
      ))}
    </NumberGrid>
  );
};

export default NumberSelector;
