
import React from 'react';
import BetsTableView from './BetsTableView';
import EmptyBetsState from './EmptyBetsState';
import LoadingState from './LoadingState';

interface PreviousBetsProps {
  apostasAnteriores: any[];
  loading: boolean;
  isAuthenticated: boolean;
}

const PreviousBets: React.FC<PreviousBetsProps> = ({ 
  apostasAnteriores, 
  loading, 
  isAuthenticated 
}) => {
  return (
    <div className="glass-card p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Apostas Anteriores</h2>
      {loading ? (
        <LoadingState />
      ) : (
        <>
          {apostasAnteriores.length > 0 ? (
            <BetsTableView apostas={apostasAnteriores} />
          ) : (
            <EmptyBetsState isAuthenticated={isAuthenticated} />
          )}
        </>
      )}
    </div>
  );
};

export default PreviousBets;
