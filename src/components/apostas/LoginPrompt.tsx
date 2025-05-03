
import React from 'react';
import { FileText } from "lucide-react";

const LoginPrompt: React.FC = () => {
  return (
    <div className="container px-4 py-8 mx-auto text-center">
      <div className="glass-card p-8 max-w-md mx-auto">
        <div className="mb-4 flex justify-center">
          <div className="w-16 h-16 bg-[#6A48F3]/20 rounded-full flex items-center justify-center">
            <FileText className="w-8 h-8 text-[#6A48F3]" />
          </div>
        </div>
        <h1 className="text-xl font-bold mb-4">Histórico de Apostas</h1>
        <p className="text-gray-400 mb-6">
          Faça login para visualizar seu histórico de apostas.
        </p>
        <a href="/auth" className="bg-[#6A48F3] text-white px-6 py-2 rounded-lg inline-block">
          Entrar
        </a>
      </div>
    </div>
  );
};

export default LoginPrompt;
