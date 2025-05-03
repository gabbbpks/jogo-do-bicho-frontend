
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Trophy } from "lucide-react";
import PrizeSelector from "@/components/PrizeSelector";
import { getDrawTimes, getPrizes } from "@/utils/betOptions";

interface BetSidebarProps {
  selectedPrizes: string[];
  onSelectPrize: (prizes: string[]) => void;
  selectedDrawTime?: string;
  onSelectDrawTime?: (drawTime: string) => void;
}

const BetSidebar = ({ 
  selectedPrizes, 
  onSelectPrize,
  selectedDrawTime = "10h Bahia",
  onSelectDrawTime = () => {}
}: BetSidebarProps) => {
  const drawTimes = getDrawTimes();
  const prizes = getPrizes();
  
  return (
    <div className="space-y-6">
      <Card className="bg-[#1E1D2E] border-[#2A2D45] text-white">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-yellow-500" /> Prêmios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400 mb-4">
            Escolha o(s) prêmio(s) que você quer jogar. Quanto mais prêmios, maior a chance de ganhar!
          </p>
          
          <PrizeSelector 
            opcoes={prizes}
            selecionadas={selectedPrizes} 
            onSelecionar={onSelectPrize}
          />
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E1D2E] border-[#2A2D45] text-white">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-500" /> Extrações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400 mb-4">
            Escolha o horário da extração para sua aposta.
          </p>
          
          <div className="grid grid-cols-2 gap-2">
            {drawTimes.map((time) => (
              <Button 
                key={time.id}
                variant="outline"
                className={`p-2 h-auto flex items-center justify-center border ${
                  selectedDrawTime === time.label 
                    ? 'bg-[#3B82F6]/20 border-[#3B82F6]' 
                    : 'bg-[#12111F] border-[#2A2D45]'
                } hover:bg-[#2A2D45] hover:border-[#3B82F6]`}
                onClick={() => onSelectDrawTime(time.label)}
              >
                {time.label}
              </Button>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-[#12111F] border border-[#2A2D45] rounded-lg">
            <h3 className="text-sm font-medium mb-2 text-gray-400">Próxima Extração</h3>
            <div className="flex items-center justify-center p-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-lg">
              <div className="text-center">
                <p className="text-xl font-bold text-[#3B82F6]">16:20h</p>
                <p className="text-xs text-gray-400">Rio de Janeiro</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BetSidebar;
