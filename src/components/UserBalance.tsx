
import React, { useEffect, useState } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { userAPI } from '@/services/api';
import { Wallet } from "lucide-react";

const UserBalance: React.FC = () => {
  const [saldo, setSaldo] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchSaldo = async () => {
      if (!isAuthenticated || !user?.id) return;
      
      try {
        setLoading(true);
        const response = await userAPI.getSaldo(user.id);
        setSaldo(response.data.saldo);
      } catch (error) {
        console.error('Erro ao buscar saldo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSaldo();
  }, [isAuthenticated, user]);

  if (!isAuthenticated || loading) {
    return null;
  }

  return (
    <div className="flex items-center bg-[#1E1D2E] text-white text-sm font-medium px-3 py-1.5 rounded-full">
      <Wallet className="w-4 h-4 mr-2 text-green-400" />
      <span>R$ {saldo?.toFixed(2) || '0.00'}</span>
    </div>
  );
};

export default UserBalance;
