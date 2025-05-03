
import React, { useEffect, useState } from 'react';

const extracoes = [
  { hora: '10:00', nome: '10h Bahia' },
  { hora: '12:00', nome: '12h Rio' },
  { hora: '14:00', nome: '14h São Paulo' },
  { hora: '16:00', nome: '16h Federal' },
  { hora: '18:00', nome: '18h Rio' },
  { hora: '20:00', nome: '20h Coruja' }
];

interface ExtracoesProps {
  onSelect?: (extracao: string) => void;
  selectedDrawTime?: string;
}

const Extracoes: React.FC<ExtracoesProps> = ({ 
  onSelect,
  selectedDrawTime = '10h Bahia' 
}) => {
  const [selecionada, setSelecionada] = useState<string>(selectedDrawTime);
  const [proxima, setProxima] = useState<{ hora: string; nome: string } | null>(null);

  useEffect(() => {
    const agora = new Date();
    const horaAtual = agora.getHours();
    const minutoAtual = agora.getMinutes();

    const extracaoMaisProxima = extracoes.find((extracao) => {
      const [h, m] = extracao.hora.split(':').map(Number);
      return h > horaAtual || (h === horaAtual && m > minutoAtual);
    });

    setProxima(extracaoMaisProxima || extracoes[0]); // volta para a primeira se já passou todas
  }, []);

  const handleSelect = (nome: string) => {
    setSelecionada(nome);
    if (onSelect) {
      onSelect(nome);
    }
  };

  return (
    <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6">
      <h2 className="text-xl font-bold mb-2 flex items-center text-white">
        <span className="mr-2">🕓</span> Extrações
      </h2>
      <p className="text-sm text-gray-300 mb-4">Escolha o horário da extração para sua aposta:</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {extracoes.map((extracao, index) => (
          <button
            key={index}
            onClick={() => handleSelect(extracao.nome)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selecionada === extracao.nome
                ? 'bg-[#3B82F6]/20 border border-[#3B82F6] text-white'
                : 'bg-[#12111F] border border-[#2A2D45] hover:bg-[#2A2D45] hover:border-[#3B82F6] text-white'
            }`}
          >
            {extracao.nome}
          </button>
        ))}
      </div>

      {proxima && (
        <div className="bg-[#12111F] border border-[#3B82F6] p-4 rounded-lg text-center">
          <p className="text-sm mb-1 text-gray-300">Próxima Extração</p>
          <p className="text-2xl font-bold text-[#3B82F6]">{proxima.hora}</p>
          <p className="text-sm text-gray-300">{proxima.nome.split(' ')[1] || 'Local'}</p>
        </div>
      )}
    </div>
  );
};

export default Extracoes;
