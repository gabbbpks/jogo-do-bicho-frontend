
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart3, ChevronDown, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StatisticsTabContent = () => {
  const navigate = useNavigate();
  const [statsTab, setStatsTab] = useState("dezena");

  const dezenaData = [
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

  const centenaData = [
    {position: "01º", num: '028', times: 49},
    {position: "02º", num: '195', times: 47},
    {position: "03º", num: '536', times: 46},
    {position: "04º", num: '923', times: 46},
    {position: "05º", num: '631', times: 46},
  ];

  const milharData = [
    {position: "01º", num: '296', times: 13},
    {position: "02º", num: '6599', times: 11},
    {position: "03º", num: '4751', times: 11},
    {position: "04º", num: '3307', times: 10},
    {position: "05º", num: '5645', times: 10},
  ];

  return (
    <div className="bg-[#1c1c28] border border-[#2A2D45] rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <span className="w-7 h-7 bg-[#3B82F6] rounded-full flex items-center justify-center mr-2">
          <BarChart3 size={16} />
        </span>
        Estatísticas
      </h2>
      
      <div className="bg-[#12111F]/70 border border-[#2A2D45] rounded-lg p-4 flex items-center mb-4">
        <Info className="h-4 w-4 mr-2 text-blue-400" />
        <span className="text-sm text-gray-300">
          Dados gerados a partir dos últimos 10000 sorteios.
        </span>
      </div>
      
      <Tabs value={statsTab} onValueChange={setStatsTab}>
        <TabsList className="w-full grid grid-cols-3 mb-6">
          <TabsTrigger value="dezena" className="text-sm">Dezena</TabsTrigger>
          <TabsTrigger value="centena" className="text-sm">Centena</TabsTrigger>
          <TabsTrigger value="milhar" className="text-sm">Milhar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dezena">
          <div className="bg-[#12111F] border border-[#2A2D45] rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-[#2A2D45]">
              <div className="p-3 text-center text-xs text-white">Posição</div>
              <div className="p-3 text-center text-sm font-medium text-white">Dezena</div>
              <div className="p-3 text-center text-xs text-white">Vezes que saiu</div>
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              <table className="w-full">
                <tbody>
                  {dezenaData.map((item, index) => (
                    <tr key={index} className="border-t border-[#2A2D45]">
                      <td className="p-3 text-center text-blue-400 text-xs">{item.position}</td>
                      <td className="p-3 text-center font-bold text-lg">{item.num}</td>
                      <td className="p-3 text-center text-gray-300">{item.times} vezes</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="centena">
          <div className="bg-[#12111F] border border-[#2A2D45] rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-[#2A2D45]">
              <div className="p-3 text-center text-xs text-white">Posição</div>
              <div className="p-3 text-center text-sm font-medium text-white">Centena</div>
              <div className="p-3 text-center text-xs text-white">Vezes que saiu</div>
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              <table className="w-full">
                <tbody>
                  {centenaData.map((item, index) => (
                    <tr key={index} className="border-t border-[#2A2D45]">
                      <td className="p-3 text-center text-blue-400 text-xs">{item.position}</td>
                      <td className="p-3 text-center font-bold text-lg">{item.num}</td>
                      <td className="p-3 text-center text-gray-300">{item.times} vezes</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="milhar">
          <div className="bg-[#12111F] border border-[#2A2D45] rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-[#2A2D45]">
              <div className="p-3 text-center text-xs text-white">Posição</div>
              <div className="p-3 text-center text-sm font-medium text-white">Milhar</div>
              <div className="p-3 text-center text-xs text-white">Vezes que saiu</div>
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              <table className="w-full">
                <tbody>
                  {milharData.map((item, index) => (
                    <tr key={index} className="border-t border-[#2A2D45]">
                      <td className="p-3 text-center text-blue-400 text-xs">{item.position}</td>
                      <td className="p-3 text-center font-bold text-lg">{item.num}</td>
                      <td className="p-3 text-center text-gray-300">{item.times} vezes</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-4 flex justify-center">
        <Button variant="link" className="text-blue-400" onClick={() => navigate("/estatisticas")}>
          Ver estatísticas completas
          <ChevronDown className="ml-1 h-4 w-4 rotate-[270deg]" />
        </Button>
      </div>
    </div>
  );
};

export default StatisticsTabContent;
