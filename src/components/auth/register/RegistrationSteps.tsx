
import { ArrowLeft } from "lucide-react";

interface RegistrationStepsProps {
  handleGoBack: () => void;
}

const RegistrationSteps = ({ handleGoBack }: RegistrationStepsProps) => {
  return (
    <>
      <div className="flex justify-start mb-4">
        <button 
          type="button" 
          onClick={handleGoBack}
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <ArrowLeft className="mr-1" size={18} />
          Voltar
        </button>
      </div>
      
      <div className="flex justify-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center text-lg font-bold">
          1
        </div>
        <div className="h-1 w-16 bg-[#4361ee] self-center mx-2"></div>
        <div className="w-10 h-10 rounded-full bg-[#4361ee] text-white flex items-center justify-center text-lg font-bold">
          2
        </div>
      </div>
      <h1 className="text-2xl font-bold">Passo 2</h1>
      <p className="text-gray-400">Complete seu cadastro</p>
    </>
  );
};

export default RegistrationSteps;
