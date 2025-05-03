
import React from "react";

interface NumberButtonProps {
  number: number;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
  className: string;
  displayLabel: string;
}

const NumberButton: React.FC<NumberButtonProps> = ({
  number,
  isSelected,
  isDisabled,
  onClick,
  className,
  displayLabel
}) => {
  return (
    <button 
      onClick={onClick}
      className={className}
      disabled={isDisabled}
      aria-label={`Número ${number}`}
      data-selected={isSelected}
      data-testid={`number-button-${number}`}
    >
      {displayLabel}
    </button>
  );
};

export default NumberButton;
