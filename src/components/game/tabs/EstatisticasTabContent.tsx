
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Info } from "lucide-react";

interface StatItem {
  position: string;
  num: string;
  times: number;
}

const EstatisticasTabContent = () => {
  const [statsType, setStatsType] = useState("dezena");

  // Statistics data
  const dezenaData: StatItem[] = [
    {position: "01º", num: '45', times: 148},
    {position: "02º", num: '93', times: 142},
    {position: "03º", num: '15', times: 142},
    {position: "04º", num: '58', times: 141},
    {position: "05º", num: '42', times: 141},
    {position: "06º", num: '57', times: 140},
    {position: "07º", num: '23', times: 138},
    {position: "08º", num: '65', times: 138},
    {position: "09º", num: '99', times: 137},
    {position: "10º", num: '36', times: 135},
  ];

  const centenaData: StatItem[] = [
    {position: "01º", num: '028', times: 49},
    {position: "02º", num: '195', times: 47},
    {position: "03º", num: '536', times: 46},
    {position: "04º", num: '923', times: 46},
    {position: "05º", num: '631', times: 46},
    {position: "06º", num: '751', times: 45},
    {position: "07º", num: '921', times: 45},
    {position: "08º", num: '307', times: 45},
    {position: "09º", num: '138', times: 45},
    {position: "10º", num: '971', times: 44},
  ];

  const milharData: StatItem[] = [
    {position: "01º", num: '296', times: 13},
    {position: "02º", num: '6599', times: 11},
    {position: "03º", num: '4751', times: 11},
    {position: "04º", num: '3307', times: 10},
    {position: "05º", num: '5645', times: 10},
    {position: "06º", num: '1431', times: 10},
    {position: "07º", num: '8138', times: 9},
    {position: "08º", num: '106', times: 9},
    {position: "09º", num: '749', times: 9},
    {position: "10º", num: '3050', times: 9},
  ];

  const getActiveData = () => {
    switch (statsType) {
      case "dezena": return dezenaData;
      case "centena": return centenaData;
      case "milhar": return milharData;
      default: return dezenaData;
    }
  };

  return (
    <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <span className="w-6 h-6 bg-[#6A48F3] rounded-full flex items-center justify-center mr-2 text-xs">
          <BarChart3 size={14} />
        </span>
        Estatísticas
      </h2>
      
      <div className="flex items-center mb-4 text-sm">
        <Info className="h-4 w-4 mr-2 text-blue-400" />
        <span className="text-gray-400">
          Dados gerados a partir dos últimos 10000 sorteios.
        </span>
      </div>
      
      <Tabs defaultValue="dezena" value={statsType} onValueChange={setStatsType} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="dezena">Dezena</TabsTrigger>
          <TabsTrigger value="centena">Centena</TabsTrigger>
          <TabsTrigger value="milhar">Milhar</TabsTrigger>
        </TabsList>
        
        <div className="bg-[#12111F] border border-[#2A2D45] rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 bg-purple-900/30">
            <div className="p-3 text-center text-purple-300">Posição</div>
            <div className="p-3 text-center text-white">{statsType.charAt(0).toUpperCase() + statsType.slice(1)}</div>
            <div className="p-3 text-center text-purple-300">Vezes que saiu</div>
          </div>
          <div className="max-h-[300px] overflow-y-auto">
            <table className="w-full">
              <tbody>
                {getActiveData().map((item, index) => (
                  <tr key={index} className="border-t border-[#2A2D45]">
                    <td className="p-3 text-center text-purple-300 text-sm">{item.position}</td>
                    <td className="p-3 text-center font-bold text-xl">{item.num}</td>
                    <td className="p-3 text-center">{item.times} vezes</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-4">
          <Link to="/estatisticas" className="text-[#6A48F3] hover:underline flex items-center">
            Ver estatísticas completas
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </Tabs>
    </div>
  );
};

export default EstatisticasTabContent;
