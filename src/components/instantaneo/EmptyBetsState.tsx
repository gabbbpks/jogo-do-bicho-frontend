
import React from 'react';

interface EmptyBetsStateProps {
  isAuthenticated: boolean;
}

const EmptyBetsState: React.FC<EmptyBetsStateProps> = ({ isAuthenticated }) => {
  return (
    <p className="text-gray-400">
      {isAuthenticated 
        ? 'Você ainda não fez nenhuma aposta.'
        : 'Faça login para ver suas apostas anteriores.'}
    </p>
  );
};

export default EmptyBetsState;
