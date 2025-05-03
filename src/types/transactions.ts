
export interface Transaction {
  id: string;
  tipo: 'deposito' | 'saque' | 'aposta' | 'ganho';
  valor: number;
  data: string;
  descricao: string;
  status: 'pendente' | 'concluido' | 'cancelado';
}
