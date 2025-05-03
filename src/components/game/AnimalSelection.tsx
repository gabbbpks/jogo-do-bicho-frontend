
import { Card, CardContent } from "@/components/ui/card";
import { Animal } from "@/data/animals";

interface AnimalSelectionProps {
  animals: Animal[];
  selectedAnimal: Animal | null;
  onSelectAnimal: (animal: Animal) => void;
}

const AnimalSelection = ({ 
  animals, 
  selectedAnimal, 
  onSelectAnimal 
}: AnimalSelectionProps) => {
  return (
    <div className="mb-6">
      <h2 className="mb-4 text-xl font-semibold">Escolha o Bicho</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {animals.map((animal) => (
          <Card
            key={animal.id}
            className={`cursor-pointer transition-colors ${
              selectedAnimal?.id === animal.id
                ? "border-2 border-bicho-primary"
                : ""
            }`}
            onClick={() => onSelectAnimal(animal)}
          >
            <CardContent className="flex flex-col items-center p-4">
              <span className="mb-2 text-lg font-medium">{animal.name}</span>
              <div className="flex flex-wrap justify-center gap-1">
                {animal.numbers.map((num) => (
                  <span
                    key={num}
                    className="inline-flex items-center justify-center w-6 h-6 text-xs bg-gray-100 rounded-full"
                  >
                    {num}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnimalSelection;
