
import { ChevronDown } from "lucide-react";

const ResultFilters = () => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-4">
          <label className="block text-sm text-gray-400 mb-2">Extração:</label>
          <div className="relative">
            <select className="w-full bg-[#12111F] border border-[#2A2D45] rounded-lg p-3 appearance-none">
              <option>TODA HORA</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>
        <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-4">
          <label className="block text-sm text-gray-400 mb-2">Horário:</label>
          <div className="relative">
            <select className="w-full bg-[#12111F] border border-[#2A2D45] rounded-lg p-3 appearance-none">
              <option>Todos os horários</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultFilters;
