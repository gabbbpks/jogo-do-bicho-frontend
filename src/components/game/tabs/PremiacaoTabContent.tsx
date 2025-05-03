
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Info } from "lucide-react";

// Data for the premiacoes table
const premiacoes = [
  { modalidade: 'Milhar', valor: 'R$ 1,00', cotacao: 'R$ 5.000,00' },
  { modalidade: 'Centena', valor: 'R$ 1,00', cotacao: 'R$ 600,00' },
  { modalidade: 'Dezena', valor: 'R$ 1,00', cotacao: 'R$ 60,00' },
  { modalidade: 'Grupo', valor: 'R$ 1,00', cotacao: 'R$ 18,00' },
  { modalidade: 'Terno Dezena', valor: 'R$ 1,00', cotacao: 'R$ 8.000,00' },
  { modalidade: 'Terno Grupo', valor: 'R$ 1,00', cotacao: 'R$ 3.000,00' },
  { modalidade: 'Duque de Dezena', valor: 'R$ 1,00', cotacao: 'R$ 500,00' },
  { modalidade: 'Duque de Grupo', valor: 'R$ 1,00', cotacao: 'R$ 300,00' },
  { modalidade: 'Dezena da Fortuna', valor: 'R$ 1,00', cotacao: 'R$ 40.000,00' },
];

const PremiacaoTabContent = () => {
  return (
    <div className="bg-[#1c1c28] border border-[#2A2D45] rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Premiação na Popular</h2>
      
      <p className="text-gray-300 mb-6">
        Na Loteria Popular a premiação não é fixa. Com apostas mínimas de R$ 1,00 até R$ 5,00, os ganhos 
        variam de acordo com a modalidade, a quantidade de prêmios escolhidos e o valor apostado. 
        Cada modalidade tem uma cotação demonstrado na tabela:
      </p>
      
      <div className="overflow-x-auto mb-8">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#3B82F6] text-white">
              <TableHead className="text-white font-medium">Modalidade</TableHead>
              <TableHead className="text-white font-medium">Valor apostado</TableHead>
              <TableHead className="text-white font-medium">Cotação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {premiacoes.map((p, idx) => (
              <TableRow key={idx} className="border-b border-[#2A2D45]">
                <TableCell className="text-gray-200">{p.modalidade}</TableCell>
                <TableCell className="text-gray-200">{p.valor}</TableCell>
                <TableCell className="text-green-400 font-semibold">{p.cotacao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="space-y-4 text-gray-300">
        <div className="bg-[#2A2D45]/30 p-4 rounded-lg border border-[#3B82F6]/30">
          <p className="flex items-start">
            <span className="inline-block mr-2 mt-1"><Info size={18} className="text-[#3B82F6]" /></span>
            <span><strong className="text-[#3B82F6]">OBS:</strong> Cotação para jogos combinados e invertidos, será baseada na quantidade de inversões e combinações, conforme a aba de COMBINAÇÕES.</span>
          </p>
        </div>
        
        <div className="bg-[#2A2D45]/30 p-4 rounded-lg border border-[#3B82F6]/30">
          <p className="mb-2">
            <strong className="text-[#3B82F6]">OBS²:</strong> A premiação da Dezena da Fortuna é baseada na quantidade de acertos:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>4 acertos = R$ 25,00</li>
            <li>5 acertos = R$ 200,00</li>
            <li>6 acertos = R$ 10.000,00</li>
            <li>7 acertos = R$ 20.000,00</li>
            <li>8 acertos = R$ 40.000,00</li>
          </ul>
        </div>
        
        <p className="text-center text-sm mt-6">
          Qualquer dúvida, contate o suporte ao cliente.
        </p>
      </div>
    </div>
  );
};

export default PremiacaoTabContent;
