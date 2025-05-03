
import { Link, useLocation } from "react-router-dom";
import { 
  Sidebar as SidebarComponent, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Grid, HomeIcon, LayoutGrid, Circle, Gift, BarChart3, History, PiggyBank, Zap } from "lucide-react";

const menuItems = [
  { title: "Home", path: "/", icon: HomeIcon },
  { title: "Aposta Rápida", path: "/jogar?rapida=true", icon: Zap },
  { title: "Jogo Instantâneo", path: "/jogo-instantaneo", icon: Zap },
  { title: "Unidade", path: "/jogar?tipo=unidade", icon: Circle },
  { title: "Dezena", path: "/jogar?tipo=dezena", icon: Grid },
  { title: "Centena", path: "/jogar?tipo=centena", icon: Grid },
  { title: "Milhar", path: "/jogar?tipo=milhar", icon: LayoutGrid },
  { title: "Grupo", path: "/jogo", icon: LayoutGrid },
  { title: "Estatísticas", path: "/estatisticas", icon: BarChart3 },
  { title: "Resultados", path: "/resultados", icon: History },
  { title: "Premiações", path: "/premiacoes", icon: Gift },
  { title: "Depósito", path: "/deposito", icon: PiggyBank },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarComponent variant="sidebar" className="hidden md:flex bg-[#1E1D2E] border-r border-[#2A2D45] w-[13rem]">
      <SidebarRail className="bg-[#1E1D2E] hover:bg-[#2A2D45] after:bg-[#2A2D45]" />
      <SidebarContent className="bg-[#1E1D2E]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-200">Apostas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    isActive={location.pathname === item.path || location.pathname + location.search === item.path} 
                    tooltip={item.title}
                    className="text-gray-200 hover:bg-[#2A2D45] hover:text-white data-[active=true]:bg-[#6A48F3] data-[active=true]:text-white"
                  >
                    <Link to={item.path} className="flex items-center w-full">
                      <item.icon className="mr-2" size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
};

export default Sidebar;
