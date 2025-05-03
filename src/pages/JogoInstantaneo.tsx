
import React from 'react';
import { Dices } from 'lucide-react';
import { useJogoInstantaneo } from '@/hooks/useJogoInstantaneo';
import BichoGameSection from '@/components/instantaneo/BichoGameSection';
import BetHistorySection from '@/components/instantaneo/BetHistorySection';
import BetSidePanel from '@/components/instantaneo/BetSidePanel';

const JogoInstantaneo: React.FC = () => {
  const {
    selectedBicho,
    setSelectedBicho,
    valor,
    setValor,
    apostasAnteriores,
    loading,
    isAuthenticated,
    mensagem,
    handleApostar
  } = useJogoInstantaneo();

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-2xl font-bold mb-2 flex items-center">
        <span className="w-10 h-10 bg-[#6A48F3] rounded-full flex items-center justify-center mr-3 text-xl">
          <Dices size={20} />
        </span>
        <span className="text-gradient">Jogo do Bicho Instantâneo</span>
      </h1>
      <p className="text-gray-400 mb-6">
        Escolha um dos 25 bichos para apostar e tente a sorte instantaneamente!
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="col-span-1 lg:col-span-4">
          <BichoGameSection 
            selectedBicho={selectedBicho} 
            setSelectedBicho={setSelectedBicho} 
          />
          
          <BetHistorySection 
            apostasAnteriores={apostasAnteriores}
            loading={loading}
            isAuthenticated={isAuthenticated}
          />
        </div>

        <div className="col-span-1 lg:col-span-2">
          <BetSidePanel
            selectedBicho={selectedBicho}
            valor={valor}
            setValor={setValor}
            onApostar={handleApostar}
            mensagem={mensagem}
          />
        </div>
      </div>
    </div>
  );
};

export default JogoInstantaneo;
