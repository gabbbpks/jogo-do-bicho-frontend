
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { useAuth } from "@/contexts/AuthContext";
import UserBalance from './UserBalance';
import UserMenu from './UserMenu';
import TopNav from './TopNav';
import NextDrawTimer from './NextDrawTimer';

const Header = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <>
      {isAuthenticated && <TopNav />}
      <header className="w-full bg-[#0E0D1B] py-2 border-b border-[#2A2D45]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="hidden md:block w-1/4">
              {/* Empty space to balance the header layout */}
            </div>
            
            <div className="flex items-center justify-center mx-auto md:mx-0">
              <Link to="/" className="mr-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#6A48F3] rounded-md flex items-center justify-center mr-3">
                    <span className="text-white text-2xl font-bold">JB</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-white">Popular</span>
                    <span className="text-xs text-gray-300">O melhor jogo do bicho online</span>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              <NextDrawTimer />
              {isAuthenticated && <UserBalance />}
              {!isAuthenticated ? (
                <>
                  <Link to="/auth" className="bg-[#6A48F3] text-white text-sm font-medium px-4 py-1.5 rounded-full">
                    Criar Conta
                  </Link>
                  <Link to="/auth" className="border border-[#6A48F3] text-[#6A48F3] text-sm font-medium px-4 py-1.5 rounded-full">
                    Entrar
                  </Link>
                </>
              ) : (
                <UserMenu />
              )}
              <button className="text-gray-200 p-2 rounded-full hover:bg-[#1E1D2E]">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
