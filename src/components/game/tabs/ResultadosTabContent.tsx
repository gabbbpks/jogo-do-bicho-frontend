
import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useResultados } from "@/hooks/useResultados";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/results/LoadingSpinner";
import { mockDraws } from "@/components/results/mock-data";

const ResultadosTabContent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Use real API data or fallback to mock data
  const { data: apiDraws, isLoading, error } = useResultados(selectedDate);
  
  // Use API data if available, otherwise use mock data
  const drawResults = apiDraws || mockDraws;
  
  const navigateDate = (days: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const handlePreviousDay = () => navigateDate(-1);
  const handleNextDay = () => navigateDate(1);

  return (
    <div className="bg-[#1c1c28] border border-[#2A2D45] rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Resultados do Jogo do Bicho</h2>
      
      <div className="bg-[#2A2D45]/30 p-4 rounded-lg border border-[#3B82F6]/30 mb-6">
        <h3 className="text-lg font-semibold mb-3 text-[#3B82F6]">Horários de Sorteios</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium text-yellow-300 mb-1">Segunda a Sexta</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>08:30h - Manhã</li>
              <li>10:00h - PT</li>
              <li>12:00h - PT</li>
              <li>14:00h - PT</li>
              <li>16:00h - PT</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-yellow-300 mb-1">Sábado</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>10:00h - PT</li>
              <li>12:00h - PT</li>
              <li>14:00h - PT</li>
              <li>16:20h - Corujão</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-yellow-300 mb-1">Domingo</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>10:00h - PT</li>
              <li>12:00h - PT</li>
              <li>15:00h - PTN</li>
              <li>18:30h - PTV</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Date navigation */}
      <div className="flex items-center justify-between mb-4 bg-[#3B82F6]/10 p-2 rounded-lg">
        <Button 
          variant="outline" 
          size="sm" 
          className="text-[#3B82F6] border-[#3B82F6]"
          onClick={handlePreviousDay}
        >
          <ChevronLeft className="h-4 w-4" />
          Anterior
        </Button>
        
        <div className="flex items-center space-x-2 bg-[#2A2D45] px-4 py-2 rounded-lg">
          <Calendar className="h-4 w-4 text-[#3B82F6]" />
          <span className="text-white">
            {format(selectedDate, "dd/MM/yyyy", { locale: ptBR })}
          </span>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="text-[#3B82F6] border-[#3B82F6]"
          onClick={handleNextDay}
          disabled={selectedDate >= new Date()}
        >
          Próximo
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Results table */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="space-y-6 overflow-x-auto">
          {drawResults.map((draw, index) => (
            <div key={index} className="mb-6">
              <div className="bg-[#3B82F6] text-white py-2 px-4 rounded-t-lg text-center font-bold">
                {format(new Date(draw.date), "dd/MM/yyyy")} - {draw.time}
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#2A2D45]">
                    <TableHead className="text-white font-medium">Prêmio</TableHead>
                    <TableHead className="text-white font-medium">Número</TableHead>
                    <TableHead className="text-white font-medium">Grupo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {draw.results.map((result, idx) => (
                    <TableRow key={idx} className="border-b border-[#2A2D45]">
                      <TableCell className="text-white font-medium">{idx + 1}º</TableCell>
                      <TableCell className="text-[#3B82F6] font-bold">
                        {String(result.numbers[0]).padStart(5, "0")}
                      </TableCell>
                      <TableCell className="text-yellow-300">
                        {result.animal}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}

          {drawResults.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <p>Nenhum resultado disponível para esta data.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultadosTabContent;
