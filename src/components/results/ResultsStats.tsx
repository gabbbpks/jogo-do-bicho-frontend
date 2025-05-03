
import { useState } from "react";
import StatsTable from "./StatsTable";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Info } from "lucide-react";

const ResultsStats = () => {
  const [selectedView, setSelectedView] = useState<"dezena" | "centena" | "milhar">("dezena");

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
  ];

  const getActiveData = () => {
    switch (selectedView) {
      case "dezena": return dezenaData;
      case "centena": return centenaData;
      case "milhar": return milharData;
      default: return dezenaData;
    }
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center">
          <span className="w-7 h-7 bg-[#6A48F3] rounded-full flex items-center justify-center mr-2 text-sm">📊</span>
          Estatísticas dos Números
        </h2>
        
        <div className="flex items-center space-x-2">
          <Info className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-400">
            Dados baseados nos últimos 10.000 sorteios
          </span>
        </div>
      </div>

      <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg overflow-hidden mb-6">
        <div className="flex items-center justify-between p-4 border-b border-[#2A2D45]">
          <h3 className="font-medium">Números mais sorteados</h3>
          <Select 
            value={selectedView}
            onValueChange={(value) => setSelectedView(value as "dezena" | "centena" | "milhar")}
          >
            <SelectTrigger className="w-32 h-8 bg-[#12111F]">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dezena">Dezena</SelectItem>
              <SelectItem value="centena">Centena</SelectItem>
              <SelectItem value="milhar">Milhar</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {selectedView === "dezena" && (
            <StatsTable title="Dezena" data={getActiveData()} showPosition={true} />
          )}
          {selectedView === "centena" && (
            <StatsTable title="Centena" data={getActiveData()} showPosition={true} />
          )}
          {selectedView === "milhar" && (
            <StatsTable title="Milhar" data={getActiveData()} showPosition={true} />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsTable title="Dezena" data={dezenaData.slice(0, 5)} />
        <StatsTable title="Centena" data={centenaData.slice(0, 5)} />
        <StatsTable title="Milhar" data={milharData.slice(0, 5)} />
      </div>
    </div>
  );
};

export default ResultsStats;
