
import React from 'react';
import { BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Estatisticas: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("dezena");
  const [extraction, setExtraction] = React.useState("todas");
  const [timeSlot, setTimeSlot] = React.useState("todos");
  
  // Complete data for all statistics types
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
    {position: "11º", num: '31', times: 134},
    {position: "12º", num: '38', times: 134},
    {position: "13º", num: '25', times: 134},
    {position: "14º", num: '67', times: 132},
    {position: "15º", num: '09', times: 131},
    {position: "16º", num: '33', times: 131},
    {position: "17º", num: '95', times: 130},
    {position: "18º", num: '91', times: 130},
    {position: "19º", num: '98', times: 130},
    {position: "20º", num: '87', times: 130},
    {position: "21º", num: '72', times: 130},
    {position: "22º", num: '78', times: 129},
    {position: "23º", num: '51', times: 129},
    {position: "24º", num: '30', times: 129},
    {position: "25º", num: '92', times: 129},
  ];

  const centenaData = [
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
    {position: "11º", num: '596', times: 44},
    {position: "12º", num: '428', times: 43},
    {position: "13º", num: '089', times: 42},
    {position: "14º", num: '810', times: 42},
    {position: "15º", num: '207', times: 42},
    {position: "16º", num: '081', times: 42},
    {position: "17º", num: '131', times: 42},
    {position: "18º", num: '311', times: 42},
    {position: "19º", num: '915', times: 41},
    {position: "20º", num: '297', times: 41},
    {position: "21º", num: '887', times: 41},
    {position: "22º", num: '645', times: 41},
    {position: "23º", num: '180', times: 40},
    {position: "24º", num: '590', times: 40},
    {position: "25º", num: '360', times: 40},
  ];

  const milharData = [
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
    {position: "11º", num: '4957', times: 9},
    {position: "12º", num: '2374', times: 9},
    {position: "13º", num: '8198', times: 9},
    {position: "14º", num: '3910', times: 9},
    {position: "15º", num: '8465', times: 9},
    {position: "16º", num: '4845', times: 9},
    {position: "17º", num: '3582', times: 9},
    {position: "18º", num: '1642', times: 9},
    {position: "19º", num: '2665', times: 9},
    {position: "20º", num: '887', times: 9},
    {position: "21º", num: '1691', times: 9},
    {position: "22º", num: '4382', times: 9},
    {position: "23º", num: '3614', times: 9},
    {position: "24º", num: '9459', times: 9},
    {position: "25º", num: '3631', times: 9},
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case "dezena": return dezenaData;
      case "centena": return centenaData;
      case "milhar": return milharData;
      default: return dezenaData;
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <Card className="bg-black/20 border-purple-800/30 mb-6">
        <CardHeader className="bg-purple-800 text-white">
          <CardTitle className="text-2xl font-bold flex items-center">
            <span className="w-10 h-10 bg-[#6A48F3] rounded-full flex items-center justify-center mr-3">
              <BarChart3 size={20} />
            </span>
            Estatísticas dos Sorteios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-4 text-gray-300">
            <p className="mb-4">
              Consulte as estatísticas detalhadas do Jogo do Bicho. Veja quais números e combinações
              saem com mais frequência para tomar decisões mais informadas em suas apostas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="relative w-full">
              <label className="block text-sm font-medium mb-1 text-gray-400">Extração:</label>
              <Select value={extraction} onValueChange={setExtraction}>
                <SelectTrigger className="w-full bg-[#1E1D2E] border-[#2A2D45]">
                  <SelectValue placeholder="Escolha a extração" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">TODA HORA</SelectItem>
                  <SelectItem value="ptm">PTM</SelectItem>
                  <SelectItem value="pt">PT</SelectItem>
                  <SelectItem value="ptv">PTV</SelectItem>
                  <SelectItem value="corujinha">Corujinha</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative w-full">
              <label className="block text-sm font-medium mb-1 text-gray-400">Horário:</label>
              <Select value={timeSlot} onValueChange={setTimeSlot}>
                <SelectTrigger className="w-full bg-[#1E1D2E] border-[#2A2D45]">
                  <SelectValue placeholder="Escolha o horário" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os horários</SelectItem>
                  <SelectItem value="manha">Manhã</SelectItem>
                  <SelectItem value="tarde">Tarde</SelectItem>
                  <SelectItem value="noite">Noite</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-[#1E1D2E]/50 border border-[#2A2D45] rounded-lg p-4 flex items-center mb-4">
            <span className="text-blue-400 mr-2">ℹ️</span>
            <span className="text-sm text-gray-300">
              Dados gerados a partir dos últimos 10000 sorteios.
            </span>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="dezena" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dezena">Dezena</TabsTrigger>
          <TabsTrigger value="centena">Centena</TabsTrigger>
          <TabsTrigger value="milhar">Milhar</TabsTrigger>
        </TabsList>

        <TabsContent value="dezena" className="mt-4">
          <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-purple-800/40">
              <div className="p-3 text-center text-white font-medium">Dezena</div>
              <div className="p-3 text-center text-white font-medium">Vezes que saiu</div>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              <table className="w-full">
                <tbody>
                  {dezenaData.map((item, index) => (
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
        </TabsContent>

        <TabsContent value="centena" className="mt-4">
          <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-purple-800/40">
              <div className="p-3 text-center text-white font-medium">Centena</div>
              <div className="p-3 text-center text-white font-medium">Vezes que saiu</div>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              <table className="w-full">
                <tbody>
                  {centenaData.map((item, index) => (
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
        </TabsContent>

        <TabsContent value="milhar" className="mt-4">
          <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-purple-800/40">
              <div className="p-3 text-center text-white font-medium">Milhar</div>
              <div className="p-3 text-center text-white font-medium">Vezes que saiu</div>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              <table className="w-full">
                <tbody>
                  {milharData.map((item, index) => (
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Estatisticas;
