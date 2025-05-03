
import React from 'react';
import { Search, Calendar, Filter } from 'lucide-react';

interface TransactionFiltersProps {
  filter: string;
  onFilterChange: (filter: string) => void;
  onSearch?: (search: string) => void;
}

const TransactionFilters: React.FC<TransactionFiltersProps> = ({
  filter,
  onFilterChange,
  onSearch
}) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Buscar transação..."
          className="pl-10 pr-4 py-2 bg-[#1E1D2E] border border-[#2A2D45] rounded-lg text-white w-full sm:w-80"
          onChange={(e) => onSearch && onSearch(e.target.value)}
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="flex items-center text-white bg-[#1E1D2E] border border-[#2A2D45] rounded-lg px-4 py-2">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Últimos 30 dias</span>
          </button>
        </div>
        
        <div className="relative">
          <button className="flex items-center text-white bg-[#1E1D2E] border border-[#2A2D45] rounded-lg px-4 py-2">
            <Filter className="h-4 w-4 mr-2" />
            <select 
              className="bg-transparent border-none outline-none" 
              value={filter}
              onChange={(e) => onFilterChange(e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="deposito">Depósitos</option>
              <option value="saque">Saques</option>
              <option value="aposta">Apostas</option>
              <option value="ganho">Ganhos</option>
            </select>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilters;
