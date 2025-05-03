
import React from 'react';
import { useDeposito } from '@/hooks/useDeposito';
import DepositoHeader from '@/components/deposito/DepositoHeader';
import DepositoAmountSelector from '@/components/deposito/DepositoAmountSelector';
import CupomInput from '@/components/deposito/CupomInput';
import PixPaymentMethod from '@/components/deposito/PixPaymentMethod';

const Deposito: React.FC = () => {
  const {
    valor,
    setValor,
    cupom,
    setCupom,
    isLoading,
    user,
    isAuthenticated,
    handleFinalizarDeposito
  } = useDeposito();

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <DepositoHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DepositoAmountSelector valor={valor} setValor={setValor} />
        <CupomInput cupom={cupom} setCupom={setCupom} />
        <PixPaymentMethod 
          valor={valor} 
          isLoading={isLoading} 
          user={user} 
          onFinalizarDeposito={handleFinalizarDeposito} 
        />
      </div>
    </div>
  );
};

export default Deposito;
