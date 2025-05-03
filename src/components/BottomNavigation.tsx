
import { Link } from 'react-router-dom';
import { Home, CircleDollarSign, BarChart2, User, Bell } from 'lucide-react';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0E0D1B] border-t border-[#2A2D45] md:hidden z-10">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className="flex flex-col items-center text-gray-500 hover:text-[#6A48F3]">
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Início</span>
        </Link>
        
        <Link to="/deposito" className="flex flex-col items-center text-gray-500 hover:text-[#6A48F3]">
          <CircleDollarSign className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Depósito</span>
        </Link>
        
        <Link to="/minhas-apostas" className="flex flex-col items-center text-gray-500 hover:text-[#6A48F3]">
          <BarChart2 className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Apostas</span>
        </Link>
        
        <Link to="/auth" className="flex flex-col items-center text-gray-500 hover:text-[#6A48F3]">
          <User className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Perfil</span>
        </Link>
        
        <Link to="/notificacoes" className="flex flex-col items-center text-gray-500 hover:text-[#6A48F3]">
          <Bell className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Notificações</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
