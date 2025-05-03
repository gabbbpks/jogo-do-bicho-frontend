
import React from 'react';
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

const EmptyBetsState: React.FC = () => {
  return (
    <Card className="bg-[#0E0D1B] border-[#2A2D45] p-12 text-center">
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 bg-[#6A48F3]/20 rounded-full flex items-center justify-center">
          <FileText className="w-8 h-8 text-[#6A48F3]" />
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">Nenhuma aposta encontrada</h2>
      <p className="text-gray-400">
        Você ainda não realizou nenhuma aposta ou não existem apostas que correspondam aos filtros.
      </p>
    </Card>
  );
};

export default EmptyBetsState;
