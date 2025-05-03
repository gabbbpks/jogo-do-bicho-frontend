
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ComoJogar = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-2xl font-bold mb-6">Como Jogar</h1>

      <Tabs defaultValue="horarios" className="w-full">
        <TabsList className="bg-[#1e1f2e] p-1 border border-gray-800 rounded-md mb-6">
          <TabsTrigger 
            value="horarios"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Horários
          </TabsTrigger>
          <TabsTrigger 
            value="modalidades"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Modalidades
          </TabsTrigger>
          <TabsTrigger 
            value="regras"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Regras
          </TabsTrigger>
          <TabsTrigger 
            value="bichos"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Bichos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="horarios" className="mt-6">
          <div className="bg-[#1e1f2e] border border-gray-800 rounded-lg p-6">
            <p className="mb-6 text-gray-300 text-center">
              O JB Popular utiliza os sorteios, conforme programação abaixo. Todas os dias há chances de ganhar!
            </p>

            <div className="bg-[#12131e] border border-gray-700 rounded-lg overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="p-3 text-left">Sorteio</th>
                    <th className="p-3 text-left">Horário Limite de aposta</th>
                    <th className="p-3 text-left">Horário de Sorteio</th>
                    <th colSpan={7} className="p-3 text-center">Dias da Semana</th>
                  </tr>
                  <tr>
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
                    {name: '15h BA', limit: '14:50', time: '15:00', days: [true, true, true, true, true, true, true]},
                    {name: '19h BA', limit: '18:50', time: '19:00', days: [true, true, false, true, true, false, false]},
                    {name: 'Federal', limit: '18:50', time: '19:00', days: [false, false, true, false, false, true, false]},
                    {name: '21h BA', limit: '20:50', time: '21:00', days: [true, true, true, true, true, true, false]},
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-[#1e1f2e]' : ''}>
                      <td className="p-3 font-medium">{row.name}</td>
                      <td className="p-3">{row.limit}</td>
                      <td className="p-3">{row.time}</td>
                      {row.days.map((available, idx) => (
                        <td key={idx} className="p-3 text-center">
                          {available ? "X" : ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 space-y-3 text-gray-300">
              <p className="font-semibold text-lg">Horários simplificados:</p>
              <p>10h BA – 10:00 (segunda a domingo)</p>
              <p>12h BA – 12:00 (segunda a domingo)</p>
              <p>15h BA – 15:00 (segunda a domingo)</p>
              <p>19h BA – 19:00 (segunda, terça, quinta e sexta)</p>
              <p>Federal – 19:00 (quarta e sábado)</p>
              <p>21h BA – 21:00 (segunda a sábado)</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="modalidades">
          <div className="bg-[#1e1f2e] border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Tipos de Apostas</h2>
            <p className="text-gray-300 mb-6">
              Selecione o tipo de aposta e aprenda sobre cada modalidade da Loteria Popular.
            </p>
            
            <div className="mb-6">
              <h3 className="font-medium mb-4">Mais jogados</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {["Unidade", "Milhar", "Show de Centena", "Show de Dezena", "Fazendinha", "Terno de Dezena", 
                  "Terno de Grupo", "Duque de Dezena", "Duque de Grupo", "Dezena da Fortuna"].map((tipo) => (
                  <div key={tipo} className="bg-[#12131e] border border-gray-700 rounded-lg p-3 text-center">
                    <span className="text-sm">{tipo}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-4">Casados</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Milhar Centena", "Centena Dezena", "Milhar Centena Dezena"].map((tipo) => (
                  <div key={tipo} className="bg-[#12131e] border border-gray-700 rounded-lg p-3 text-center">
                    <span className="text-sm">{tipo}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-4">Invertidos</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Milhar Invertida", "Centena Invertida", "Milhar Centena Invertida"].map((tipo) => (
                  <div key={tipo} className="bg-[#12131e] border border-gray-700 rounded-lg p-3 text-center">
                    <span className="text-sm">{tipo}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-4">Combinados</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Terno de Dezena Combinado", "Terno de Grupo Combinado", "Duque de Dezena Combinado"].map((tipo) => (
                  <div key={tipo} className="bg-[#12131e] border border-gray-700 rounded-lg p-3 text-center">
                    <span className="text-sm">{tipo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="regras">
          <div className="bg-[#1e1f2e] border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Regras do Jogo</h2>
            <p className="text-gray-300 mb-6">
              Conheça as regras oficiais da Loteria Popular para fazer suas apostas com segurança.
            </p>
            
            <div className="bg-[#12131e] border border-gray-700 rounded-lg p-4 mb-4">
              <h3 className="font-bold mb-2">1. Modalidades</h3>
              <p className="text-gray-400">
                A Loteria Popular oferece diversas modalidades de apostas, cada uma com sua premiação específica.
              </p>
            </div>
            
            <div className="bg-[#12131e] border border-gray-700 rounded-lg p-4 mb-4">
              <h3 className="font-bold mb-2">2. Horários de Apostas</h3>
              <p className="text-gray-400">
                As apostas devem ser realizadas dentro dos horários estabelecidos para cada sorteio.
              </p>
            </div>
            
            <div className="bg-[#12131e] border border-gray-700 rounded-lg p-4">
              <h3 className="font-bold mb-2">3. Premiação</h3>
              <p className="text-gray-400">
                Os prêmios são pagos conforme a tabela de premiação oficial disponível na seção de Premiações.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="bichos">
          <div className="bg-[#1e1f2e] border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Os 25 Bichos</h2>
            <p className="text-gray-300 mb-6">
              Cada animal está associado a um conjunto de números. Conheça todos os bichos e seus números.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                'Avestruz', 'Águia', 'Burro', 'Borboleta', 'Cachorro',
                'Cabra', 'Carneiro', 'Camelo', 'Cobra', 'Coelho',
                'Cavalo', 'Elefante', 'Galo', 'Gato', 'Jacaré',
                'Leão', 'Macaco', 'Porco', 'Pavão', 'Peru',
                'Touro', 'Tigre', 'Urso', 'Veado', 'Zebra'
              ].map((bicho, index) => (
                <div key={bicho} className="bg-[#12131e] border border-gray-700 rounded-lg p-3 text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      {/* Would be nice to have actual animal icons here */}
                      🐾
                    </div>
                  </div>
                  <h3 className="font-medium">{bicho}</h3>
                  <p className="text-xs text-gray-400">Grupo {index+1}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComoJogar;
