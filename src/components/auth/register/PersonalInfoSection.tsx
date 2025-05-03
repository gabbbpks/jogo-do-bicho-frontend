
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { RegisterFormValues } from "./types";

interface PersonalInfoSectionProps {
  form: UseFormReturn<RegisterFormValues>;
  formatCPF: (value: string) => string;
  prefilledCPF: string;
}

const PersonalInfoSection = ({ form, formatCPF, prefilledCPF }: PersonalInfoSectionProps) => {
  // Generate date options
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
  const months = [
    { value: "01", label: "Jan" },
    { value: "02", label: "Fev" },
    { value: "03", label: "Mar" },
    { value: "04", label: "Abr" },
    { value: "05", label: "Mai" },
    { value: "06", label: "Jun" },
    { value: "07", label: "Jul" },
    { value: "08", label: "Ago" },
    { value: "09", label: "Set" },
    { value: "10", label: "Out" },
    { value: "11", label: "Nov" },
    { value: "12", label: "Dez" },
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => String(currentYear - i));

  return (
    <>
      <FormField
        control={form.control}
        name="nome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input 
                placeholder="Seu nome" 
                {...field}
                className="bg-[#12111F] border-[#2A2D45] text-white" 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="sobrenome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sobrenome</FormLabel>
            <FormControl>
              <Input 
                placeholder="Seu sobrenome" 
                {...field} 
                className="bg-[#12111F] border-[#2A2D45] text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div>
        <FormLabel>Data de nascimento</FormLabel>
        <div className="grid grid-cols-3 gap-2">
          <FormField
            control={form.control}
            name="diaAniversario"
            render={({ field }) => (
              <FormItem>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="bg-[#12111F] border-[#2A2D45] text-white">
                      <SelectValue placeholder="Dia" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {days.map(day => (
                      <SelectItem key={`day-${day}`} value={day}>{day}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="mesAniversario"
            render={({ field }) => (
              <FormItem>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="bg-[#12111F] border-[#2A2D45] text-white">
                      <SelectValue placeholder="Mês" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {months.map(month => (
                      <SelectItem key={`month-${month.value}`} value={month.value}>
                        {month.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="anoAniversario"
            render={({ field }) => (
              <FormItem>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="bg-[#12111F] border-[#2A2D45] text-white">
                      <SelectValue placeholder="Ano" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-60">
                    {years.map(year => (
                      <SelectItem key={`year-${year}`} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

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
                readOnly={!!prefilledCPF}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default PersonalInfoSection;
