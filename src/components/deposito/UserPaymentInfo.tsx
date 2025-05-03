
import React from 'react';
import { User } from '@/types/auth';

interface UserPaymentInfoProps {
  user: User;
}

const UserPaymentInfo: React.FC<UserPaymentInfoProps> = ({ user }) => {
  return (
    <div className="mt-4 p-4 bg-[#0E0D1B] border border-[#2A2D45] rounded-lg">
      <h4 className="text-sm font-medium mb-2">Dados do pagamento:</h4>
      <div className="text-xs text-gray-400 space-y-1">
        <div>Nome: {user.nome} {user.sobrenome || ''}</div>
        <div>CPF: {user.cpf}</div>
        <div>E-mail: {user.email}</div>
        <div>Telefone: {user.telefone}</div>
      </div>
    </div>
  );
};

export default UserPaymentInfo;
