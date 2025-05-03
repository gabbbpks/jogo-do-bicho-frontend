
import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, FileText, HelpCircle, UserRound, Bell, Eye, EyeOff } from 'lucide-react';
import { useAuth } from "@/hooks/useAuth";
import { Badge } from "@/components/ui/badge";
import { useState } from 'react';

const TopNav = () => {
  const { user } = useAuth();
  const [showBalance, setShowBalance] = useState(true);
  
  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };
  
  return (
    <div className="bg-[#0A0A0F] border-b border-[#1E1E2E] py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <nav className="flex items-center space-x-8 sm:space-x-12">
            {/* Saldo with eye toggle */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold mb-1 text-white">
                R$ {showBalance ? user?.saldo?.toFixed(2) || '0,00' : '****'}
              </div>
              <div className="flex items-center text-[#3B82F6]">
                <span className="text-sm mr-1">Saldo</span>
                <button 
                  onClick={toggleBalanceVisibility} 
                  className="text-[#3B82F6] focus:outline-none"
                >
                  {showBalance ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            
            <Link to="/deposito" className="flex flex-col items-center justify-center relative">
              <div className="w-10 h-10 rounded-full bg-[#1E1D2E] flex items-center justify-center mb-1">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Depósito</span>
            </Link>
            
            <Link to="/historico" className="flex flex-col items-center justify-center relative">
              <div className="w-10 h-10 rounded-full bg-[#1E1D2E] flex items-center justify-center mb-1">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Apostas</span>
            </Link>
            
            <Link to="/ajuda" className="flex flex-col items-center justify-center relative">
              <div className="w-10 h-10 rounded-full bg-[#1E1D2E] flex items-center justify-center mb-1">
                <HelpCircle className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Ajuda</span>
            </Link>
            
            <Link to="/perfil" className="flex flex-col items-center justify-center relative">
              <div className="w-10 h-10 rounded-full bg-[#1E1D2E] flex items-center justify-center mb-1 relative">
                <UserRound className="h-5 w-5 text-white" />
                <Badge className="w-2.5 h-2.5 p-0 absolute -top-0.5 -right-0.5 bg-red-500" />
              </div>
              <span className="text-xs text-white">Perfil</span>
            </Link>
            
            <Link to="/notificacoes" className="flex flex-col items-center justify-center relative">
              <div className="w-10 h-10 rounded-full bg-[#1E1D2E] flex items-center justify-center mb-1 relative">
                <Bell className="h-5 w-5 text-white" />
                <Badge className="w-2.5 h-2.5 p-0 absolute -top-0.5 -right-0.5 bg-red-500" />
              </div>
              <span className="text-xs text-white">Notificações</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
