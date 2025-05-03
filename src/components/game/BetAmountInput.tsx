
import { Input } from "@/components/ui/input";

interface BetAmountInputProps {
  betAmount: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BetAmountInput = ({ betAmount, onChange }: BetAmountInputProps) => {
  return (
    <div>
      <label htmlFor="betAmount" className="block mb-2 text-sm font-medium text-gray-300">
        Valor da Aposta (R$)
      </label>
      <Input
        id="betAmount"
        type="text"
        value={betAmount}
        onChange={onChange}
        className="w-full bg-[#12111F] border-[#2A2D45] text-white"
        placeholder="Digite o valor da aposta"
      />
    </div>
  );
};

export default BetAmountInput;
