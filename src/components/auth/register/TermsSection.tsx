
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { RegisterFormValues } from "./types";

interface TermsSectionProps {
  form: UseFormReturn<RegisterFormValues>;
}

const TermsSection = ({ form }: TermsSectionProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="termos"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox 
                checked={field.value} 
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="text-sm leading-tight">
              <FormLabel className="text-sm font-normal">
                Confirmo que tenho idade igual ou superior a 18 anos e que li e concordo com os{" "}
                <a className="text-[#4361ee] hover:underline">Termos e Condições</a> e a{" "}
                <a className="text-[#4361ee] hover:underline">Política de Privacidade</a> previstos na Lei nº 13.709, de 2018
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="aceitaEmailMarketing"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center space-x-3 space-y-0">
            <FormControl>
              <Checkbox 
                checked={field.value} 
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="text-sm font-normal">
              Aceito receber novidades e ofertas por E-MAIL
            </FormLabel>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="aceitaSMSMarketing"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center space-x-3 space-y-0">
            <FormControl>
              <Checkbox 
                checked={field.value} 
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="text-sm font-normal">
              Aceito receber novidades e ofertas por SMS
            </FormLabel>
          </FormItem>
        )}
      />
    </>
  );
};

export default TermsSection;
