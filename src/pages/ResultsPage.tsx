
import { useState, useEffect } from "react";
import { useResultados } from "@/hooks/useResultados";
import { toast } from "@/hooks/use-toast";
import ResultTabs from "@/components/results/ResultTabs";
import ResultFilters from "@/components/results/ResultFilters";
import AnimalGrid from "@/components/results/AnimalGrid";
import ResultsStats from "@/components/results/ResultsStats";
import LoadingSpinner from "@/components/results/LoadingSpinner";
import { mockDraws } from "@/components/results/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResultsPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDraw, setSelectedDraw] = useState<string>("1");
  const [isLoading, setIsLoading] = useState(true);

  // Use the API data or fallback to mock data
  const { data: apiDraws, isLoading: queryLoading, error } = useResultados(date);
  
  // Use API data if available, otherwise use mock data
  const draws = apiDraws || mockDraws;

  useEffect(() => {
    setIsLoading(queryLoading);
    
    // Show toast if there's an error
    if (error) {
      console.error("Failed to fetch results:", error);
      toast({
        title: "Erro ao carregar resultados",
        description: "Usando dados de exemplo temporariamente.",
        variant: "destructive",
      });
    }
  }, [queryLoading, error]);

  return (
    <div className="container px-4 py-8 mx-auto">
      <Card className="bg-black/20 border-purple-800/30 mb-6">
        <CardHeader className="bg-purple-800 text-white">
          <CardTitle className="text-2xl font-bold flex items-center">
            <span className="w-10 h-10 bg-[#6A48F3] rounded-full flex items-center justify-center mr-3">📊</span>
            Resultados dos Sorteios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-4 text-gray-300">
            <p className="mb-4">
              Confira os resultados dos últimos sorteios do Jogo do Bicho. Os sorteios são realizados diariamente 
              e os resultados são atualizados em tempo real.
            </p>
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-800/30 mb-4">
              <h2 className="text-lg font-semibold mb-2 text-purple-300">Horários de Sorteios</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-medium text-yellow-300 mb-1">Segunda a Sexta</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>08:30h - Manhã</li>
                    <li>10:00h - PT</li>
                    <li>12:00h - PT</li>
                    <li>14:00h - PT</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-yellow-300 mb-1">Sábado</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>10:00h - PT</li>
                    <li>12:00h - PT</li>
                    <li>14:00h - PT</li>
                    <li>16:20h - Corujão</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-yellow-300 mb-1">Domingo</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>10:00h - PT</li>
                    <li>12:00h - PT</li>
                    <li>15:00h - PTN</li>
                    <li>18:30h - PTV</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <ResultFilters />
        </CardContent>
      </Card>
      
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ResultTabs draws={draws} selectedDraw={selectedDraw} />
      )}
      
      <AnimalGrid />
      <ResultsStats />
    </div>
  );
};

export default ResultsPage;
