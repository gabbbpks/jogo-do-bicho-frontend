
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResultDisplay from "./ResultDisplay";
import ResultHistory from "./ResultHistory";
import { Draw } from "@/types/results";

interface ResultTabsProps {
  draws: Draw[];
  selectedDraw: string;
}

const ResultTabs = ({ draws, selectedDraw }: ResultTabsProps) => {
  return (
    <Tabs defaultValue="results" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="results">Resultados</TabsTrigger>
        <TabsTrigger value="history">Histórico</TabsTrigger>
      </TabsList>

      <TabsContent value="results">
        <ResultDisplay draws={draws} selectedDraw={selectedDraw} />
      </TabsContent>

      <TabsContent value="history">
        <ResultHistory draws={draws} />
      </TabsContent>
    </Tabs>
  );
};

export default ResultTabs;
