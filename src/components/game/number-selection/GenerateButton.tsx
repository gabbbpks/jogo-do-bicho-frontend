
import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GenerateButtonProps {
  onClick: () => void;
  className?: string;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({
  onClick,
  className = ""
}) => {
  return (
    <Button 
      className={`bg-[#3B82F6] text-white p-2 rounded-lg ${className}`}
      onClick={onClick}
      aria-label="Gerar números"
      data-testid="generate-button"
    >
      <ChevronDown className="w-5 h-5" />
    </Button>
  );
};

export default GenerateButton;
