
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0E0D1B] border-b border-[#2A2D45] text-white">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">
            Jogo do Bicho
          </span>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </Button>

        {/* Desktop menu */}
        <nav className="hidden md:flex md:items-center md:space-x-4">
          <Link
            to="/"
            className="px-3 py-2 text-sm font-medium text-white transition-colors hover:text-[#6A48F3]"
          >
            Início
          </Link>
          <Link
            to="/jogar"
            className="px-3 py-2 text-sm font-medium text-white transition-colors hover:text-[#6A48F3]"
          >
            Jogar
          </Link>
          <Link
            to="/resultados"
            className="px-3 py-2 text-sm font-medium text-white transition-colors hover:text-[#6A48F3]"
          >
            Resultados
          </Link>
          <Button variant="default" className="ml-4 bg-[#6A48F3] hover:bg-[#5A3CE0]">
            Entrar
          </Button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 z-20 flex flex-col p-4 mt-2 space-y-2 bg-[#1E1D2E] border-b border-[#2A2D45] shadow-md top-16 animate-fade-in md:hidden">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-[#2A2D45]"
              onClick={toggleMenu}
            >
              Início
            </Link>
            <Link
              to="/jogar"
              className="px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-[#2A2D45]"
              onClick={toggleMenu}
            >
              Jogar
            </Link>
            <Link
              to="/resultados"
              className="px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-[#2A2D45]"
              onClick={toggleMenu}
            >
              Resultados
            </Link>
            <Button variant="default" className="w-full bg-[#6A48F3] hover:bg-[#5A3CE0]" onClick={toggleMenu}>
              Entrar
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
