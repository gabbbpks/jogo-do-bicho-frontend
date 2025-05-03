
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabContent from "./TabContent";

interface GameTabsProps {
  selectedTab: string;
  onTabChange: (value: string) => void;
}

const GameTabs = ({ selectedTab, onTabChange }: GameTabsProps) => {
  return (
    <Tabs 
      defaultValue={selectedTab} 
      className="w-full"
      onValueChange={(value) => onTabChange(value)}
    >
      <TabsList className="bg-[#1E1D2E] p-1 border border-[#2A2D45] rounded-lg w-full flex justify-between mb-4">
        <TabsTrigger 
          value="bicho"
          className="flex-1 data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white rounded-md"
        >
          Apostar
        </TabsTrigger>
        <TabsTrigger 
          value="como"
          className="flex-1 data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white rounded-md"
        >
          Como Jogar
        </TabsTrigger>
        <TabsTrigger 
          value="combinacoes"
          className="flex-1 data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white rounded-md"
        >
          Combinações
        </TabsTrigger>
        <TabsTrigger 
          value="premiacao"
          className="flex-1 data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white rounded-md"
        >
          Premiação
        </TabsTrigger>
        <TabsTrigger 
          value="estatisticas"
          className="flex-1 data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white rounded-md"
        >
          Estatísticas
        </TabsTrigger>
        <TabsTrigger 
          value="resultados"
          className="flex-1 data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white rounded-md"
        >
          Resultados
        </TabsTrigger>
      </TabsList>

      <div className="mt-6">
        <TabContent selectedTab={selectedTab} />
      </div>
    </Tabs>
  );
};

export default GameTabs;
