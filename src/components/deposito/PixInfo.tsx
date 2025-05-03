
import React from 'react';

const PixInfo: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="bg-blue-600 rounded-lg w-20 h-20 flex items-center justify-center mb-4 mx-auto">
        <img 
          src="/lovable-uploads/34e067bd-0a71-4f85-956f-efce26caaee2.png" 
          alt="PIX" 
          className="w-12 h-12"
        />
      </div>
      
      <h3 className="text-xl font-bold text-center mb-2">Pix</h3>
      <p className="text-center text-sm mb-6">Realize seu depósito utilizando o Pix!</p>
    </div>
  );
};

export default PixInfo;
