
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { RegisterUserData } from "@/types/auth";

// Import newly created components
import { registerSchema, RegisterFormValues } from "./register/types";
import PersonalInfoSection from "./register/PersonalInfoSection";
import ContactSection from "./register/ContactSection";
import PasswordSection from "./register/PasswordSection";
import TermsSection from "./register/TermsSection";
import RegistrationSteps from "./register/RegistrationSteps";

interface RegisterFormProps {
  initialUserData?: {
    cpf: string;
    nome?: string;
    sobrenome?: string;
    email?: string;
    telefone?: string;
  };
}

const RegisterForm = ({ initialUserData }: RegisterFormProps) => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use props from URL if provided (e.g., pre-verified CPF)
  const urlParams = new URLSearchParams(window.location.search);
  const prefilledCPF = initialUserData?.cpf || urlParams.get('cpf') || '';
  
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nome: initialUserData?.nome || "",
      sobrenome: initialUserData?.sobrenome || "",
      email: initialUserData?.email || "",
      cpf: prefilledCPF.replace(/[^\d]/g, ""),
      telefone: initialUserData?.telefone?.replace(/^\+55/, "") || "",
      diaAniversario: "",
      mesAniversario: "",
      anoAniversario: "",
      senha: "",
      confirmSenha: "",
      codigoArea: "+55",
      termos: false,
      aceitaEmailMarketing: false,
      aceitaSMSMarketing: false,
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

  const onSubmit = async (values: RegisterFormValues) => {
    try {
      setIsSubmitting(true);
      
      // Format birth date for API
      const dataNascimento = `${values.anoAniversario}-${values.mesAniversario}-${values.diaAniversario}`;
      
      // Clean CPF format
      const cleanCPF = values.cpf.replace(/[^\d]/g, "");
      
      const userData: RegisterUserData = {
        nome: values.nome,
        sobrenome: values.sobrenome,
        email: values.email,
        cpf: cleanCPF,
        telefone: `${values.codigoArea}${values.telefone}`,
        dataNascimento: dataNascimento,
        senha: values.senha,
        confirmarSenha: values.confirmSenha, 
        termos: values.termos,
        aceitaEmailMarketing: values.aceitaEmailMarketing,
        aceitaSMSMarketing: values.aceitaSMSMarketing,
      };
      
      await register(userData);
      
      toast({
        title: "Registro realizado com sucesso",
        description: "Bem-vindo ao Bicho do Bicho!",
      });
      
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Erro ao criar conta",
        description: "Verifique seus dados e tente novamente.",
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
      <div className="space-y-2 text-center">
        <RegistrationSteps handleGoBack={handleGoBack} />
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <PersonalInfoSection 
            form={form} 
            formatCPF={formatCPF} 
            prefilledCPF={prefilledCPF} 
          />
          
          <ContactSection form={form} />
          
          <PasswordSection form={form} />

          <TermsSection form={form} />

          <Button 
            type="submit" 
            className="w-full bg-[#4361ee] hover:bg-[#3b4fd3] text-white" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Criando conta..." : "Finalizar cadastro"}
          </Button>

          <div className="text-center text-sm">
            <span className="text-gray-400">Já possui uma conta? </span>
            <Link to="/auth?tab=login" className="text-[#4361ee] hover:underline font-medium">
              Faça o login aqui
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
