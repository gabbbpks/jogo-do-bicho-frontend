
import { useState } from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { RegisterFormValues } from "./types";

interface PasswordSectionProps {
  form: UseFormReturn<RegisterFormValues>;
}

const PasswordSection = ({ form }: PasswordSectionProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <FormField
        control={form.control}
        name="senha"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Senha*</FormLabel>
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
      
      <FormField
        control={form.control}
        name="confirmSenha"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nova Senha*</FormLabel>
            <FormControl>
              <div className="relative">
                <Input 
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="******" 
                  {...field} 
                  className="bg-[#12111F] border-[#2A2D45] text-white pr-10"
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default PasswordSection;
