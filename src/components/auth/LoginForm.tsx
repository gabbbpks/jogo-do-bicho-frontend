
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

const loginSchema = z.object({
  cpf: z.string().min(11, { message: "CPF inválido" }),
  senha: z.string().min(1, { message: "A senha é obrigatória" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  initialCPF?: string;
}

const LoginForm = ({ initialCPF = '' }: LoginFormProps) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      cpf: initialCPF.replace(/[^\d]/g, ""),
      senha: "",
    },
  });

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

  const onSubmit = async (values: LoginFormValues) => {
    try {
      setIsSubmitting(true);
      
      // Clean CPF format
      const cleanCPF = values.cpf.replace(/[^\d]/g, "");
      
      await login(cleanCPF, values.senha);
      
      toast({
        title: "Login realizado com sucesso",
        description: "Bem-vindo de volta!",
      });
      
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Erro ao fazer login",
        description: "CPF ou senha incorretos.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoBack = () => {
    // Navigate back to CPF verification step
    navigate('/auth');
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
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
        
        <h2 className="text-xl font-semibold text-center">Entrar na sua conta</h2>
        <p className="text-gray-400 text-center">Insira seus dados para acessar o sistema</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CPF</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="000.000.000-00" 
                    {...field} 
                    value={formatCPF(field.value)}
                    onChange={(e) => {
                      const formatted = formatCPF(e.target.value);
                      field.onChange(formatted);
                    }}
                    className="bg-[#12111F] border-[#2A2D45] text-white"
                    readOnly={!!initialCPF}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="senha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      placeholder="******" 
                      {...field} 
                      className="bg-[#12111F] border-[#2A2D45] text-white pr-10"
                    />
                    <button 
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="text-right">
            <a href="#" className="text-sm text-[#4361ee] hover:underline">
              Esqueceu a senha?
            </a>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#4361ee] hover:bg-[#3b4fd3] text-white" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </Button>
          
          <div className="text-center text-sm">
            <span className="text-gray-400">Não tem uma conta? </span>
            <Link to="/auth?tab=register" className="text-[#4361ee] hover:underline font-medium">
              Registre-se
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
