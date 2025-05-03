
import React from 'react';
import { Button } from "@/components/ui/button";
import { User } from "@/types/auth";
import PixInfo from './PixInfo';
import DepositLimitInfo from './DepositLimitInfo';
import PixRules from './PixRules';
import TotalAmount from './TotalAmount';
import UserPaymentInfo from './UserPaymentInfo';

interface PixPaymentMethodProps {
  valor: string;
  isLoading: boolean;
  user: User | null;
  onFinalizarDeposito: () => void;
}

const PixPaymentMethod: React.FC<PixPaymentMethodProps> = ({ 
  valor, 
  isLoading, 
  user, 
  onFinalizarDeposito 
}) => {
  return (
    <div className="bg-[#12131e] border border-[#2A2D45] rounded-lg p-6">
      <h2 className="text-lg font-medium mb-4">3. Escolha o método de pagamento</h2>
      
      <PixInfo />
      <DepositLimitInfo />
      <PixRules />
      <TotalAmount valor={valor} />
      
      <Button 
        className="w-full bg-blue-600 hover:bg-blue-700"
        onClick={onFinalizarDeposito}
        disabled={isLoading}
      >
        {isLoading ? "Processando..." : "Finalizar"}
      </Button>

      {user && <UserPaymentInfo user={user} />}
    </div>
  );
};

export default PixPaymentMethod;
