
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarIcon } from "lucide-react";

interface BetsTableProps {
  apostas: any[];
}

const BetsTable: React.FC<BetsTableProps> = ({ apostas }) => {
  return (
    <div className="bg-[#0E0D1B] border border-[#2A2D45] rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#6A48F3]/20 border-b border-[#2A2D45]">
            <TableHead>Data</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Número/Bicho</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apostas.map((aposta: any, idx) => (
            <TableRow key={idx} className="border-b border-[#2A2D45]">
              <TableCell className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2 text-gray-400" />
                {new Date(aposta.data).toLocaleDateString()}
              </TableCell>
              <TableCell>{aposta.tipo}</TableCell>
              <TableCell>{aposta.selecao?.bicho || aposta.numero}</TableCell>
              <TableCell>R$ {aposta.valor?.toFixed(2)}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  aposta.status === 'premiado' 
                    ? 'bg-green-600/20 text-green-400' 
                    : aposta.status === 'aguardando'
                    ? 'bg-yellow-600/20 text-yellow-400'
                    : 'bg-red-600/20 text-red-400'
                }`}>
                  {aposta.status === 'premiado' 
                    ? 'Ganhou' 
                    : aposta.status === 'aguardando'
                    ? 'Aguardando'
                    : 'Perdeu'}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BetsTable;
