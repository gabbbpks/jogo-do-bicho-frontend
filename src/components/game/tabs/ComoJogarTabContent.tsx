
import { Link } from "react-router-dom";

const ComoJogarTabContent = () => {
  return (
    <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <span className="w-6 h-6 bg-[#6A48F3] rounded-full flex items-center justify-center mr-2 text-xs">?</span>
        Como Jogar no Jogo do Bicho
      </h2>
      
      <p className="text-gray-400 mb-6">
        O Jogo do Bicho é uma loteria popular no Brasil. Cada número está associado a um animal, e os jogadores 
        apostam em qual animal ou número será sorteado.
      </p>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2">Como Funciona:</h3>
        <ul className="list-disc pl-5 text-gray-400 space-y-2">
          <li>Existem 25 animais, cada um associado a 4 números (total de 100 números, de 00 a 99)</li>
          <li>Você pode apostar em um animal específico ou em um número</li>
          <li>Os sorteios são realizados diariamente</li>
          <li>Se o número ou animal que você apostou for sorteado, você ganha</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2">Tipos de Apostas:</h3>
        <ul className="list-disc pl-5 text-gray-400 space-y-2">
          <li><span className="text-white">Grupo:</span> Aposte em um animal (4 números)</li>
          <li><span className="text-white">Dezena:</span> Aposte em um número específico</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <span className="w-6 h-6 bg-[#6A48F3] rounded-full flex items-center justify-center mr-2 text-xs">🕒</span>
          Horários dos Sorteios
        </h3>
        
        <p className="text-gray-400 mb-4">
          O JB Popular utiliza os sorteios, conforme programação abaixo. Todas os dias há chances de ganhar!
        </p>
        
        <div className="bg-[#12111F] border border-[#2A2D45] rounded-lg overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2A2D45]">
                <th className="p-3 text-left text-yellow-300">Sorteio</th>
                <th className="p-3 text-left">Horário Limite de aposta</th>
                <th className="p-3 text-left">Horário de Sorteio</th>
                <th colSpan={7} className="p-3 text-center">Dias da Semana</th>
              </tr>
              <tr className="border-b border-[#2A2D45]">
                <th className="p-0"></th>
                <th className="p-0"></th>
                <th className="p-0"></th>
                <th className="p-3 text-center">Segunda</th>
                <th className="p-3 text-center">Terça</th>
                <th className="p-3 text-center">Quarta</th>
                <th className="p-3 text-center">Quinta</th>
                <th className="p-3 text-center">Sexta</th>
                <th className="p-3 text-center">Sábado</th>
                <th className="p-3 text-center">Domingo</th>
              </tr>
            </thead>
            <tbody>
              {[
                {name: '10h BA', limit: '09:50', time: '10:00', days: [true, true, true, true, true, true, true]},
                {name: '12h BA', limit: '11:50', time: '12:00', days: [true, true, true, true, true, true, true]},
                {name: '15h BA', limit: '14:50', time: '18:10', days: [true, true, true, true, true, true, true]},
                {name: '19h BA', limit: '18:50', time: '19:00', days: [true, true, false, true, true, false, false]},
                {name: 'Federal', limit: '18:50', time: '19:00', days: [false, false, true, false, false, true, false]},
                {name: '21h BA', limit: '20:50', time: '21:00', days: [true, true, true, true, true, true, false]},
              ].map((row, index) => (
                <tr key={index} className={`border-b border-[#2A2D45] ${index % 2 === 0 ? '' : 'bg-[#161422]'}`}>
                  <td className="p-3 font-medium text-yellow-300">{row.name}</td>
                  <td className="p-3">{row.limit}</td>
                  <td className="p-3">{row.time}</td>
                  {row.days.map((available, idx) => (
                    <td key={idx} className="p-3 text-center">
                      {available ? "✓" : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 space-y-2 text-gray-300">
          <p className="font-semibold text-lg">Horários simplificados:</p>
          <p>10h BA – 10:00 (segunda a domingo)</p>
          <p>12h BA – 12:00 (segunda a domingo)</p>
          <p>15h BA – 18:10 (segunda a domingo)</p>
          <p>19h BA – 19:00 (segunda, terça, quinta e sexta)</p>
          <p>Federal – 19:00 (quarta e sábado)</p>
          <p>21h BA – 21:00 (segunda a sábado)</p>
        </div>
      </div>
      
      <div className="bg-[#12131e] border-l-4 border-yellow-500 p-4 mt-6">
        <h4 className="font-bold flex items-center">
          <span className="mr-2">⚠️</span> Importante:
        </h4>
        <p className="text-gray-400 mt-1">
          Este site é apenas para entretenimento. Jogue com responsabilidade.
        </p>
      </div>
      
      <div className="mt-6">
        <Link to="/como-jogar" className="text-[#6A48F3] hover:underline flex items-center">
          Ver mais detalhes sobre como jogar
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ComoJogarTabContent;
