
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";

const UserMenu = () => {
  const { user, isAuthenticated, logout } = useAuth();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  const handleLogout = async () => {
    await logout();
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="outline" asChild>
          <Link to="/auth">Entrar</Link>
        </Button>
        <Button asChild>
          <Link to="/auth?tab=register">Registrar</Link>
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar>
            <AvatarFallback>{user?.nome ? getInitials(user.nome) : "U"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="font-medium">{user?.nome}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/perfil" className="cursor-pointer">Meu Perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/historico" className="cursor-pointer">Minhas Apostas</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/extrato" className="cursor-pointer">Extrato</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
