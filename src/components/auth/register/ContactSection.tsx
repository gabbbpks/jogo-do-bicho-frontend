
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { RegisterFormValues } from "./types";

interface ContactSectionProps {
  form: UseFormReturn<RegisterFormValues>;
}

const ContactSection = ({ form }: ContactSectionProps) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <FormField
          control={form.control}
          name="codigoArea"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Área</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  readOnly 
                  className="bg-[#12111F] border-[#2A2D45] text-white" 
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="telefone"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Seu telefone" 
                  {...field} 
                  className="bg-[#12111F] border-[#2A2D45] text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>E-mail</FormLabel>
            <FormControl>
              <Input 
                placeholder="seu-email@exemplo.com" 
                {...field} 
                className="bg-[#12111F] border-[#2A2D45] text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default ContactSection;
