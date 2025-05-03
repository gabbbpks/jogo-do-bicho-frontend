
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getBetTypeOptions } from "@/utils/betOptions";

interface BetTypeSelectorProps {
  betType: string;
  onChange: (value: string) => void;
  selectedBetType: string | null;
}

const BetTypeSelector = ({ betType, onChange, selectedBetType }: BetTypeSelectorProps) => {
  return (
    <div>
      <label htmlFor="betType" className="block mb-2 text-sm font-medium text-gray-300">
        Tipo de Jogo
      </label>
      <Select 
        value={betType}
        onValueChange={onChange}
        disabled={!!selectedBetType}
      >
        <SelectTrigger className="bg-[#12111F] border-[#2A2D45] text-white">
          <SelectValue placeholder="Selecione o tipo de jogo" />
        </SelectTrigger>
        <SelectContent className="bg-[#12111F] border-[#2A2D45] text-white">
          {getBetTypeOptions(selectedBetType).map(option => (
            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BetTypeSelector;
