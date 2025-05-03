
import React from 'react';

const PixRules: React.FC = () => {
  return (
    <div className="space-y-3 mb-6">
      <div className="flex items-start">
        <div className="text-blue-500 mr-2 mt-1">•</div>
        <p className="text-sm text-blue-500">
          O valor do Pix deverá ser exatamente igual ao valor da compra.
        </p>
      </div>
      <div className="flex items-start">
        <div className="text-blue-500 mr-2 mt-1">•</div>
        <p className="text-sm text-blue-500">
          Esta compra só terá validade após a confirmação do pagamento.
        </p>
      </div>
    </div>
  );
};

export default PixRules;
