
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const cpfSchema = z.object({
  cpf: z.string().min(11, { message: "CPF deve ter 11 dígitos" }),
});

type CPFFormValues = z.infer<typeof cpfSchema>;

interface CPFVerificationFormProps {
  onCPFVerified: (data: any) => void;
}

const CPFVerificationForm = ({ onCPFVerified }: CPFVerificationFormProps) => {
  const { verifyCPF } = useAuth();
  const [isVerifying, setIsVerifying] = useState(false);
  
  const form = useForm<CPFFormValues>({
    resolver: zodResolver(cpfSchema),
    defaultValues: {
      cpf: "",
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

  const onSubmit = async (values: CPFFormValues) => {
    try {
      setIsVerifying(true);
      
      // Clean CPF format
      const cleanCPF = values.cpf.replace(/[^\d]/g, "");
      
      // Validate CPF with API
      const response = await verifyCPF(cleanCPF);
      
      // Pass result to parent component
      onCPFVerified({
        ...response,
        cpf: cleanCPF
      });
      
    } catch (error) {
      console.error("CPF verification error:", error);
      toast({
        title: "Erro ao verificar CPF",
        description: "Ocorreu um erro ao verificar o CPF. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-[#4361ee] text-white flex items-center justify-center text-lg font-bold">
            1
          </div>
          <div className="h-1 w-16 bg-gray-600 self-center mx-2"></div>
          <div className="w-10 h-10 rounded-full bg-gray-600 text-gray-300 flex items-center justify-center text-lg font-bold">
            2
          </div>
        </div>
        <h1 className="text-2xl font-bold">Passo 1</h1>
        <p className="text-gray-400">Insira seu CPF para continuar</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-[#4361ee] hover:bg-[#3b4fd3] text-white" 
            disabled={isVerifying}
          >
            {isVerifying ? "Verificando..." : "Continuar"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CPFVerificationForm;
