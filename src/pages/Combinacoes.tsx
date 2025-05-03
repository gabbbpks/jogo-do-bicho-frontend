
import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

// Data for the combinations table
const combinacoes = [
  { tipo: 'Grupo Combinado', exemplo: '01-02-03-04-05' },
  { tipo: 'Dupla Combinada', exemplo: '12-34' },
  { tipo: 'Trio Combinado', exemplo: '12-34-56' },
  { tipo: 'Terno de Grupo', exemplo: '02-07-13' },
  { tipo: 'Quadra de Grupo', exemplo: '02-07-13-16' },
  { tipo: 'Quina de Grupo', exemplo: '02-07-13-16-24' },
];

// Data for the inversions table
const inversoes = [
  { combinacao: '12', dezena: '12 / 21', centena: '123 / 321', milhar: '1234 / 4321' },
  { combinacao: '34', dezena: '34 / 43', centena: '345 / 543', milhar: '3456 / 6543' },
  { combinacao: '56', dezena: '56 / 65', centena: '567 / 765', milhar: '5678 / 8765' },
  { combinacao: '78', dezena: '78 / 87', centena: '789 / 987', milhar: '7890 / 0987' },
  { combinacao: '90', dezena: '90 / 09', centena: '901 / 109', milhar: '9012 / 2109' },
];

const Combinacoes: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-10 bg-black/20 dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Combinações e Inversões</h1>

      <div className="grid gap-8">
        {/* Combinações Table */}
        <div>
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <span className="mr-2 text-2xl">🔁</span> Tipos de Combinações
          </h2>
          <div className="overflow-x-auto">
            <Table className="mb-8">
              <TableHeader>
                <TableRow className="bg-purple-800 text-white">
                  <TableHead className="text-left text-white">Tipo</TableHead>
                  <TableHead className="text-left text-white">Exemplo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {combinacoes.map((c, idx) => (
                  <TableRow key={idx} className="border-b border-gray-300 dark:border-gray-700">
                    <TableCell className="p-2">{c.tipo}</TableCell>
                    <TableCell className="p-2">{c.exemplo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Inversões Table */}
        <div>
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <span className="mr-2 text-2xl">🔄</span> Inversões
          </h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-purple-800 text-white">
                  <TableHead className="text-center text-white">Combinação</TableHead>
                  <TableHead className="text-center text-white">Dezena</TableHead>
                  <TableHead className="text-center text-white">Centena</TableHead>
                  <TableHead className="text-center text-white">Milhar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inversoes.map((inv, idx) => (
                  <TableRow key={idx} className="border-b border-gray-300 dark:border-gray-700 text-center">
                    <TableCell className="p-2">{inv.combinacao}</TableCell>
                    <TableCell className="p-2">{inv.dezena}</TableCell>
                    <TableCell className="p-2">{inv.centena}</TableCell>
                    <TableCell className="p-2">{inv.milhar}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        
        {/* Explanation section */}
        <div className="mt-6 bg-purple-900/20 p-4 rounded-lg border border-purple-800/30">
          <h3 className="text-lg font-medium mb-2 text-purple-300">Como funcionam as combinações?</h3>
          <p className="text-gray-300 mb-3">
            As combinações são formas de apostar em múltiplos números ao mesmo tempo, 
            aumentando suas chances de ganhar. Cada tipo de combinação tem suas próprias 
            regras e multiplicadores de premiação.
          </p>
          <p className="text-gray-300">
            As inversões permitem que você aposte em todas as variações possíveis dos 
            números escolhidos, cobrindo diferentes posições. Por exemplo, se você 
            escolher "12", estará apostando também em "21".
          </p>
        </div>
      </div>
    </div>
  );
};

export default Combinacoes;
