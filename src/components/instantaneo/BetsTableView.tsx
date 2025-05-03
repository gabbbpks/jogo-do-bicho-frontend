
import React from 'react';
import BetStatusBadge from './BetStatusBadge';

interface BetsTableViewProps {
  apostas: any[];
}

const BetsTableView: React.FC<BetsTableViewProps> = ({ apostas }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#2A2D45]">
            <th className="text-left p-2">Data</th>
            <th className="text-left p-2">Bicho</th>
            <th className="text-left p-2">Valor</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {apostas.map((aposta: any, idx) => (
            <tr key={idx} className="border-b border-[#2A2D45]">
              <td className="p-2">{new Date(aposta.data).toLocaleDateString()}</td>
              <td className="p-2">{aposta.selecao?.bicho || aposta.numero}</td>
              <td className="p-2">R$ {aposta.valor?.toFixed(2)}</td>
              <td className="p-2">
                <BetStatusBadge status={aposta.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BetsTableView;
