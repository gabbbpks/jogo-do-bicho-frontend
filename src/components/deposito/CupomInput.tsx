
import React from 'react';
import { Input } from "@/components/ui/input";

interface CupomInputProps {
  cupom: string;
  setCupom: React.Dispatch<React.SetStateAction<string>>;
}

const CupomInput: React.FC<CupomInputProps> = ({ cupom, setCupom }) => {
  return (
    <div className="bg-[#12131e] border border-[#2A2D45] rounded-lg p-6">
      <h2 className="text-lg font-medium mb-4">2. Inserir cupom</h2>
      <Input
        type="text"
        value={cupom}
        onChange={(e) => setCupom(e.target.value)}
        className="bg-[#0E0D1B] border-[#2A2D45] mb-4"
        placeholder="Código Promocional"
      />
      <p className="text-sm text-blue-500 cursor-pointer hover:underline">
        Cupons disponíveis
      </p>
    </div>
  );
};

export default CupomInput;
