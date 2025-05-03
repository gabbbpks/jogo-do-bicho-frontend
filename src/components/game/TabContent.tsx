
import ApostarTabContent from "./tabs/ApostarTabContent";
import ComoJogarTabContent from "./tabs/ComoJogarTabContent";
import CombinacoesTabContent from "./tabs/CombinacoesTabContent";
import PremiacaoTabContent from "./tabs/PremiacaoTabContent";
import EstatisticasTabContent from "./tabs/EstatisticasTabContent";
import ResultadosTabContent from "./tabs/ResultadosTabContent";

interface TabContentProps {
  selectedTab: string;
}

const TabContent = ({ selectedTab }: TabContentProps) => {
  switch (selectedTab) {
    case "bicho":
      return <ApostarTabContent />;
    case "como":
      return <ComoJogarTabContent />;
    case "combinacoes":
      return <CombinacoesTabContent />;
    case "premiacao":
      return <PremiacaoTabContent />;
    case "estatisticas":
      return <EstatisticasTabContent />;
    case "resultados":
      return <ResultadosTabContent />;
    default:
      return null;
  }
};

export default TabContent;
