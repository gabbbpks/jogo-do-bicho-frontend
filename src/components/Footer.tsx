
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-[#0E0D1B] border-t border-[#2A2D45] text-white text-sm">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-[#6A48F3] rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <span className="text-sm font-bold text-white">JB Popular</span>
            </div>
            <p className="text-xs text-gray-500 max-w-xs">
              O melhor lugar para jogar o tradicional jogo do bicho online.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-wrap">
            <div className="w-1/2 md:w-auto md:mr-12 mb-4">
              <h3 className="text-xs font-bold uppercase text-gray-500 mb-3">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-xs text-gray-400 hover:text-[#6A48F3]">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/jogar" className="text-xs text-gray-400 hover:text-[#6A48F3]">
                    Jogar
                  </Link>
                </li>
                <li>
                  <Link to="/resultados" className="text-xs text-gray-400 hover:text-[#6A48F3]">
                    Resultados
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="w-1/2 md:w-auto">
              <h3 className="text-xs font-bold uppercase text-gray-500 mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/termos" className="text-xs text-gray-400 hover:text-[#6A48F3]">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link to="/privacidade" className="text-xs text-gray-400 hover:text-[#6A48F3]">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-6 mt-6 text-center border-t border-[#2A2D45]">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} JB Popular. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
