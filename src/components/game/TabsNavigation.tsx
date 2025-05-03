
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabsNavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const TabsNavigation = ({ activeTab, onTabChange }: TabsNavigationProps) => {
  return (
    <TabsList className="bg-[#1c1c28] border-none rounded-lg w-full grid grid-cols-6 p-1">
      <TabsTrigger 
        value="apostar"
        className="data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white text-white"
        onClick={() => onTabChange("apostar")}
      >
        Apostar
      </TabsTrigger>
      <TabsTrigger 
        value="como-jogar"
        className="data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white text-white"
        onClick={() => onTabChange("como-jogar")}
      >
        Como Jogar
      </TabsTrigger>
      <TabsTrigger 
        value="combinacoes"
        className="data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white text-white"
        onClick={() => onTabChange("combinacoes")}
      >
        Combinações
      </TabsTrigger>
      <TabsTrigger 
        value="premiacao"
        className="data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white text-white"
        onClick={() => onTabChange("premiacao")}
      >
        Premiação
      </TabsTrigger>
      <TabsTrigger 
        value="estatisticas"
        className="data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white text-white"
        onClick={() => onTabChange("estatisticas")}
      >
        Estatísticas
      </TabsTrigger>
      <TabsTrigger 
        value="resultados"
        className="data-[state=active]:bg-[#6A48F3] data-[state=active]:text-white text-white"
        onClick={() => onTabChange("resultados")}
      >
        Resultados
      </TabsTrigger>
    </TabsList>
  );
};

export default TabsNavigation;
