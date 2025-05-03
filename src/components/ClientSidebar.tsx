
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, FileText, Wallet, PiggyBank, Bell, LogOut, History } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const ClientSidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  
  const menuItems = [
    { path: '/perfil', icon: User, label: 'Perfil' },
    { path: '/historico', icon: FileText, label: 'Minhas Apostas' },
    { path: '/extrato', icon: History, label: 'Extrato' },
    { path: '/deposito', icon: Wallet, label: 'Depósito' },
    { path: '/saque', icon: PiggyBank, label: 'Saque' },
    { path: '/notificacoes', icon: Bell, label: 'Notificações' },
  ];

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="bg-[#0A0A0F] border-r border-[#1E1E2E] h-full py-8 w-64 hidden md:block">
      <div className="px-4 mb-8">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[#1E1D2E] flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-white">
              {user?.nome?.charAt(0) || 'A'}
            </span>
          </div>
          <div className="text-xl font-bold text-white">
            {user?.nome || 'ANDERSON'}
          </div>
          <div className="text-sm text-gray-400">
            Último acesso: {user?.ultimoAcesso || '02/05/2025 08:47'}
          </div>
        </div>
      </div>
      
      <div className="space-y-1 px-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-3 rounded-lg ${
              location.pathname === item.path
                ? 'bg-[#6A48F3] text-white'
                : 'text-gray-300 hover:bg-[#1E1E2E] hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </Link>
        ))}
        
        <button 
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 rounded-lg text-red-400 hover:bg-[#1E1E2E]"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
};

export default ClientSidebar;
