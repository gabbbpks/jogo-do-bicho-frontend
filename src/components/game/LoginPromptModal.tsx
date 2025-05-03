
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface LoginPromptModalProps {
  show: boolean;
  onCancel: () => void;
  onLogin: () => void;
}

const LoginPromptModal = ({ show, onCancel, onLogin }: LoginPromptModalProps) => {
  const navigate = useNavigate();

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <Card className="w-full max-w-md p-6 bg-[#1c1c28] border border-[#2A2D45]">
        <h2 className="text-xl font-bold text-white mb-4">Faça login para continuar</h2>
        <p className="text-gray-200 mb-6">
          Para realizar sua aposta, é necessário estar logado.
        </p>
        <div className="flex justify-end space-x-4">
          <Button 
            variant="outline" 
            onClick={onCancel}
            className="border-[#2A2D45] text-white hover:bg-[#2A2D45]"
          >
            Cancelar
          </Button>
          <Button 
            onClick={() => navigate("/auth?redirect=betting")} 
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white"
          >
            Fazer Login
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPromptModal;
