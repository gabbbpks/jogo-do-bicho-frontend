
import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

const premiacoes = [
  { modalidade: 'Grupo', valor: 'R$ 1,00', cotacao: 'R$ 18,00' },
  { modalidade: 'Milhar', valor: 'R$ 1,00', cotacao: 'R$ 5.000,00' },
  { modalidade: 'Centena', valor: 'R$ 1,00', cotacao: 'R$ 600,00' },
  { modalidade: 'Dezena', valor: 'R$ 1,00', cotacao: 'R$ 60,00' },
  { modalidade: 'Terno de Grupo', valor: 'R$ 1,00', cotacao: 'R$ 3.000,00' },
  { modalidade: 'Duque de Grupo', valor: 'R$ 1,00', cotacao: 'R$ 300,00' },
  { modalidade: 'Duque de Dezenas', valor: 'R$ 1,00', cotacao: 'R$ 500,00' },
  { modalidade: 'Terno de Dezenas', valor: 'R$ 1,00', cotacao: 'R$ 2.000,00' },
  { modalidade: 'Quadra de Grupo', valor: 'R$ 1,00', cotacao: 'R$ 20.000,00' },
  { modalidade: 'Quina de Grupo', valor: 'R$ 1,00', cotacao: 'R$ 100.000,00' },
  { modalidade: 'Passe', valor: 'R$ 1,00', cotacao: 'R$ 70,00' },
  { modalidade: 'Passe de Dezena', valor: 'R$ 1,00', cotacao: 'R$ 700,00' },
];

const Premiacoes: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 mt-10 bg-black/20 dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Premiações por Modalidade</h1>
      
      <div className="overflow-hidden rounded-lg border border-purple-800/30">
        <Table>
          <TableHeader>
            <TableRow className="bg-purple-800 text-white">
              <TableHead className="text-left text-white font-medium">Modalidade</TableHead>
              <TableHead className="text-left text-white font-medium">Valor Apostado</TableHead>
              <TableHead className="text-left text-white font-medium">Cotação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {premiacoes.map((p, index) => (
              <TableRow key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-purple-900/10">
                <TableCell className="p-2 font-medium">{p.modalidade}</TableCell>
                <TableCell className="p-2">{p.valor}</TableCell>
                <TableCell className="p-2 text-green-400">{p.cotacao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-8 bg-purple-900/20 p-4 rounded-lg border border-purple-800/30">
        <h2 className="text-lg font-semibold mb-3 text-purple-300">Regras de Premiação</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>O valor da cotação é multiplicado pelo valor apostado para calcular o prêmio final.</li>
          <li>Apostas em múltiplas modalidades aumentam suas chances de ganhar.</li>
          <li>Prêmios são pagos em até 24h após o resultado oficial.</li>
          <li>O jogador pode conferir seus resultados na aba "Resultados" ou "Histórico".</li>
        </ul>
      </div>
    </div>
  );
};

export default Premiacoes;
