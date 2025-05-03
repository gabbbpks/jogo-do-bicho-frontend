
import React from 'react';
import PreviousBets from '@/components/instantaneo/PreviousBets';

interface BetHistorySectionProps {
  apostasAnteriores: any[];
  loading: boolean;
  isAuthenticated: boolean;
}

const BetHistorySection: React.FC<BetHistorySectionProps> = ({ 
  apostasAnteriores, 
  loading, 
  isAuthenticated 
}) => {
  return (
    <PreviousBets 
      apostasAnteriores={apostasAnteriores}
      loading={loading}
      isAuthenticated={isAuthenticated}
    />
  );
};

export default BetHistorySection;
