
import { Button } from "@/components/ui/button";

interface NumberSelectionProps {
  selectedNumber: number | null;
  onSelectNumber: (number: number) => void;
}

const NumberSelection = ({ 
  selectedNumber, 
  onSelectNumber 
}: NumberSelectionProps) => {
  return (
    <div className="mb-6">
      <h2 className="mb-4 text-xl font-semibold">Escolha um Número</h2>
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
        {Array.from({ length: 100 }, (_, i) => i).map((num) => (
          <Button
            key={num}
            variant="outline"
            className={`h-12 ${
              selectedNumber === num
                ? "bg-bicho-primary text-white hover:bg-bicho-primary"
                : ""
            }`}
            onClick={() => onSelectNumber(num)}
          >
            {String(num).padStart(2, "0")}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default NumberSelection;
