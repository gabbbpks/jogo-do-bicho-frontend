
import React from 'react';
import { useHistoricoApostas } from '@/hooks/useHistoricoApostas';
import BetFilters from '@/components/apostas/BetFilters';
import BetsTable from '@/components/apostas/BetsTable';
import EmptyBetsState from '@/components/apostas/EmptyBetsState';
import LoginPrompt from '@/components/apostas/LoginPrompt';
import BetsLoading from '@/components/apostas/BetsLoading';
import { FileText } from "lucide-react";

const HistoricoApostas: React.FC = () => {
  const {
    apostasFiltradas,
    filtroDias,
    setFiltroDias,
    filtroStatus,
    setFiltroStatus,
    loading,
    isAuthenticated
  } = useHistoricoApostas();

  if (!isAuthenticated) {
    return <LoginPrompt />;
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <span className="w-8 h-8 bg-[#6A48F3] rounded-full flex items-center justify-center mr-2 text-sm">
          <FileText className="w-4 h-4" />
        </span>
        Minhas Apostas
      </h1>

      <BetFilters
        filtroDias={filtroDias}
        filtroStatus={filtroStatus}
        onDiasChange={setFiltroDias}
        onStatusChange={setFiltroStatus}
      />

      {loading ? (
        <BetsLoading />
      ) : apostasFiltradas.length > 0 ? (
        <BetsTable apostas={apostasFiltradas} />
      ) : (
        <EmptyBetsState />
      )}
    </div>
  );
};

export default HistoricoApostas;
