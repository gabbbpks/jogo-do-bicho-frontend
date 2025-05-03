
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Draw } from "@/types/results";

interface ResultHeaderProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  selectedDraw: string;
  setSelectedDraw: (value: string) => void;
  draws: Draw[];
}

const ResultHeader = ({
  date,
  setDate,
  selectedDraw,
  setSelectedDraw,
  draws,
}: ResultHeaderProps) => {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold text-center">Resultados</h1>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
        <div>
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Data
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label
            htmlFor="draw"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Extração
          </label>
          <Select
            value={selectedDraw}
            onValueChange={(value) => setSelectedDraw(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma extração" />
            </SelectTrigger>
            <SelectContent>
              {draws.map((draw) => (
                <SelectItem key={draw.id} value={draw.id.toString()}>
                  {`Extração ${draw.time}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default ResultHeader;
