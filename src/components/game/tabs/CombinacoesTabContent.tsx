
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

// Data for the combinations table
const combinacoes = [
  { tipo: 'Grupo', exemplo: '01' },
  { tipo: 'Dupla', exemplo: '01-02' },
  { tipo: 'Trio', exemplo: '01-02-03' },
  { tipo: 'Quadra', exemplo: '01-02-03-04' },
  { tipo: 'Quina', exemplo: '01-02-03-04-05' },
  { tipo: 'Dezena', exemplo: '12' },
  { tipo: 'Centena', exemplo: '123' },
  { tipo: 'Milhar', exemplo: '1234' },
];

// Data for the inversions table
const inversoes = [
  { digitos: '2', combinacao: '12', dezena: '12 / 21', centena: '-', milhar: '-' },
  { digitos: '3', combinacao: '123', dezena: '12 / 21', centena: '123 / 132 / 213 / 231 / 312 / 321', milhar: '-' },
  { digitos: '4', combinacao: '1234', dezena: '12 / 21 / 34 / 43', centena: '123 / 132 / 213 / 231 / 312 / 321', milhar: '1234 / 1243 / 1324 / 1342 / 1423 / 1432...' },
];

const CombinacoesTabContent = () => {
  return (
    <div className="bg-[#1c1c28] border border-[#2A2D45] rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Tabela de Combinações</h2>
      
      <div className="overflow-x-auto mb-8">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#3B82F6] text-white">
              <TableHead className="text-white">Tipo</TableHead>
              <TableHead className="text-white">Exemplo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {combinacoes.map((c, idx) => (
              <TableRow key={idx} className="border-b border-[#2A2D45]">
                <TableCell className="text-gray-200">{c.tipo}</TableCell>
                <TableCell className="text-gray-200">{c.exemplo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <h2 className="text-xl font-bold text-white mb-4">Tabela de Inversões</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#3B82F6] text-white">
              <TableHead className="text-center text-white">Dígitos</TableHead>
              <TableHead className="text-center text-white">Combinação</TableHead>
              <TableHead className="text-center text-white">Dezena</TableHead>
              <TableHead className="text-center text-white">Centena</TableHead>
              <TableHead className="text-center text-white">Milhar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inversoes.map((inv, idx) => (
              <TableRow key={idx} className="border-b border-[#2A2D45] text-center">
                <TableCell className="text-gray-200">{inv.digitos}</TableCell>
                <TableCell className="text-gray-200">{inv.combinacao}</TableCell>
                <TableCell className="text-gray-200">{inv.dezena}</TableCell>
                <TableCell className="text-gray-200">{inv.centena}</TableCell>
                <TableCell className="text-gray-200">{inv.milhar}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-6 bg-[#2A2D45]/30 p-4 rounded-lg border border-[#3B82F6]/30">
        <h3 className="text-lg font-semibold mb-2 text-[#3B82F6]">Como funcionam as combinações?</h3>
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
  );
};

export default CombinacoesTabContent;
