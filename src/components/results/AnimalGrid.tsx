
import { ChevronDown } from "lucide-react";

const AnimalGrid = () => {
  return (
    <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6 my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Grupo</h2>
        <div className="flex items-center">
          <span className="text-gray-400 mr-2">Atrasados</span>
          <ChevronDown className="text-gray-400" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {['Veado', 'Porco', 'Macaco', 'Borboleta', 'Tigre', 
          'Elefante', 'Cobra', 'Burro', 'Carneiro', 'Gato']
          .map((animal, index) => (
          <div key={index} className="bg-[#12111F] border border-[#2A2D45] rounded-lg p-3 text-center">
            <div className="bg-[#6A48F3]/40 text-xs rounded-md inline-block px-2 py-0.5 mb-1">
              {index < 3 ? 'Ontem' : 'Hoje'}
            </div>
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 rounded-full bg-[#2A2D45] flex items-center justify-center">
                🐾
              </div>
            </div>
            <h3 className="text-sm">{animal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalGrid;
