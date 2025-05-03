
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { authAPI } from "@/services/api";
import { toast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";

const LoginPrompt = () => {
  const [cpf, setCPF] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();
  const { verifyCPF } = useAuth();

  const formatCPF = (value: string) => {
    const digits = value.replace(/\D/g, "");
    let formattedValue = digits;
    
    if (digits.length > 3) {
      formattedValue = digits.replace(/(\d{3})(\d)/, "$1.$2");
    }
    if (digits.length > 6) {
      formattedValue = formattedValue.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    }
    if (digits.length > 9) {
      formattedValue = formattedValue.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
    }
    
    return formattedValue;
  };

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cpf) {
      toast({
        title: "CPF obrigatório",
        description: "Preencha o CPF para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Clean CPF format
    const cleanCPF = cpf.replace(/[^\d]/g, "");
    
    if (cleanCPF.length !== 11) {
      toast({
        title: "CPF inválido",
        description: "O CPF deve ter 11 dígitos.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsVerifying(true);
      const response = await verifyCPF(cleanCPF);
      
      // Redirect to the auth page with the appropriate tab based on verification result
      if (response.userExists) {
        navigate(`/auth?tab=login&cpf=${cleanCPF}`);
      } else {
        navigate(`/auth?tab=register&cpf=${cleanCPF}`);
      }
    } catch (error) {
      console.error("Erro ao verificar CPF:", error);
      toast({
        title: "Falha ao verificar CPF",
        description: "Ocorreu um erro ao verificar seu CPF. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="glass-card backdrop-blur-md bg-[#1E1D2E]/90 border border-[#2A2D45] rounded-lg p-6 mt-6">
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold text-white">Faça login para apostar</h2>
          <p className="text-gray-200">Entre com seu CPF para continuar</p>
        </div>

        <form onSubmit={handleContinue} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="cpf" className="text-sm font-medium text-gray-200">
              CPF
            </label>
            <Input
              id="cpf"
              value={cpf}
              onChange={(e) => setCPF(formatCPF(e.target.value))}
              className="bg-[#12111F] border-[#2A2D45] text-white"
              placeholder="000.000.000-00"
            />
          </div>

          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-[#6A48F3] hover:bg-[#5A3CE0] text-white" 
              disabled={isVerifying}
            >
              {isVerifying ? "Verificando..." : "Continuar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPrompt;
