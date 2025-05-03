
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface BetFiltersProps {
  filtroDias: number;
  filtroStatus: string;
  onDiasChange: (value: number) => void;
  onStatusChange: (value: string) => void;
}

const BetFilters: React.FC<BetFiltersProps> = ({ 
  filtroDias, 
  filtroStatus, 
  onDiasChange, 
  onStatusChange 
}) => {
  return (
    <Card className="bg-[#0E0D1B] border-[#2A2D45] mb-8">
      <CardHeader>
        <CardTitle>Filtros</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3 text-gray-300">Intervalo de tempo</h3>
            <RadioGroup 
              value={filtroDias.toString()} 
              onValueChange={(value) => onDiasChange(Number(value))}
              className="flex flex-wrap gap-4"
            >
              {[7, 15, 30, 45, 60].map((dias) => (
                <div key={dias} className="flex items-center space-x-2">
                  <RadioGroupItem value={dias.toString()} id={`dias-${dias}`} 
                    className="text-[#6A48F3] border-[#6A48F3] data-[state=checked]:bg-[#6A48F3]" />
                  <label htmlFor={`dias-${dias}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {dias} Dias
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3 text-gray-300">Status do Bilhete</h3>
            <RadioGroup 
              value={filtroStatus} 
              onValueChange={(value) => onStatusChange(value)}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="todos" id="status-todos" 
                  className="text-[#6A48F3] border-[#6A48F3] data-[state=checked]:bg-[#6A48F3]" />
                <label htmlFor="status-todos" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Todos
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="premiado" id="status-premiados" 
                  className="text-[#6A48F3] border-[#6A48F3] data-[state=checked]:bg-[#6A48F3]" />
                <label htmlFor="status-premiados" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Premiados
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="aguardando" id="status-aguardando" 
                  className="text-[#6A48F3] border-[#6A48F3] data-[state=checked]:bg-[#6A48F3]" />
                <label htmlFor="status-aguardando" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Aguardando Resultado
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao_premiado" id="status-nao-premiados" 
                  className="text-[#6A48F3] border-[#6A48F3] data-[state=checked]:bg-[#6A48F3]" />
                <label htmlFor="status-nao-premiados" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Não premiados
                </label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BetFilters;
