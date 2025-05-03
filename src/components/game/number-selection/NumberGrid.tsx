
import React from "react";
import NumberButton from "./NumberButton";

interface NumberGridProps {
  onSelectNumber: (number: number) => void;
  selectedNumbers: number[];
  isSelectionDisabled: (num: number) => boolean;
  getNumberButtonClasses: (num: number) => string;
  getNumberDisplayLabel: (num: number) => string;
}

const NumberGrid: React.FC<NumberGridProps> = ({ 
  onSelectNumber,
  selectedNumbers,
  isSelectionDisabled,
  getNumberButtonClasses,
  getNumberDisplayLabel
}) => {
  return (
    <div className="grid grid-cols-5 gap-3 mb-4">
      {[0,1,2,3,4,5,6,7,8,9].map(num => (
        <NumberButton 
          key={num}
          number={num}
          isSelected={selectedNumbers.includes(num)}
          isDisabled={isSelectionDisabled(num)}
          onClick={() => !isSelectionDisabled(num) && onSelectNumber(num)}
          className={getNumberButtonClasses(num)}
          displayLabel={getNumberDisplayLabel(num)}
        />
      ))}
    </div>
  );
};

export default NumberGrid;
