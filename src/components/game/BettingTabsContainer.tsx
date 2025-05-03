
import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import TabsNavigation from "@/components/game/TabsNavigation";
import SimpleTabContent from "@/components/game/SimpleTabContent";
import StatisticsTabContent from "@/components/game/StatisticsTabContent";
import CombinacoesTabContent from "@/components/game/tabs/CombinacoesTabContent";
import PremiacaoTabContent from "@/components/game/tabs/PremiacaoTabContent";
import ResultadosTabContent from "@/components/game/tabs/ResultadosTabContent";

interface BettingTabsContainerProps {
  initialActiveTab: string;
  onTabChange: (tab: string) => void;
  children?: React.ReactNode;
}

const BettingTabsContainer = ({ 
  initialActiveTab, 
  onTabChange,
  children
}: BettingTabsContainerProps) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <Tabs 
      value={activeTab}
      onValueChange={handleTabChange}
      className="w-full"
    >
      <TabsNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      <TabsContent value="apostar" className="mt-6">
        {children}
      </TabsContent>
      
      <TabsContent value="como-jogar">
        <SimpleTabContent 
          title="Como Jogar" 
          description="Aqui você encontra informações sobre como jogar no Jogo do Bicho." 
        />
      </TabsContent>
      
      <TabsContent value="combinacoes">
        <CombinacoesTabContent />
      </TabsContent>
      
      <TabsContent value="premiacao">
        <PremiacaoTabContent />
      </TabsContent>
      
      <TabsContent value="estatisticas">
        <StatisticsTabContent />
      </TabsContent>
      
      <TabsContent value="resultados">
        <ResultadosTabContent />
      </TabsContent>
    </Tabs>
  );
};

export default BettingTabsContainer;
