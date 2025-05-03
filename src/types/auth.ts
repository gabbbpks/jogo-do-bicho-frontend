
export interface User {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  cpf: string;
  telefone: string;
  dataNascimento: string;
  saldo: number;
  dataCriacao: string;
  ultimoAcesso: string;
}

export interface RegisterUserData {
  nome: string;
  sobrenome: string;
  email: string;
  cpf: string;
  telefone: string;
  dataNascimento: string;
  senha: string;
  confirmarSenha?: string;
  termos: boolean;
  aceitaEmailMarketing?: boolean;
  aceitaSMSMarketing?: boolean;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (cpf: string, senha: string) => Promise<User>;
  register: (userData: RegisterUserData) => Promise<User>;
  logout: () => Promise<void>;
  verifyCPF: (cpf: string) => Promise<any>;
}
