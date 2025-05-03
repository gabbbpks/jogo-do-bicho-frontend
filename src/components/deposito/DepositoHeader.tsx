
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";

const DepositoHeader: React.FC = () => {
  return (
    <>
      <div className="mb-6">
        <Link to="/" className="text-blue-500 flex items-center hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" /> Home
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-2">Depositar</h1>
      <p className="text-gray-400 mb-8">Escolha a melhor forma de pagamento para adicionar saldos à sua conta e apostar!</p>
      
      <div className="mb-8">
        <div className="border-b border-gray-800">
          <button className="text-blue-500 border-b-2 border-blue-500 pb-2 font-medium">
            Pagamento Online
          </button>
        </div>
      </div>
    </>
  );
};

export default DepositoHeader;
