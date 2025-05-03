
import React from "react";
import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SurpresinhaButtonProps {
  onClick: () => void;
  className?: string;
}

const SurpresinhaButton: React.FC<SurpresinhaButtonProps> = ({
  onClick,
  className = ""
}) => {
  return (
    <Button 
      className={`bg-[#3B82F6] text-white p-2 rounded-lg ${className}`}
      onClick={onClick}
      aria-label="Gerar surpresinha"
      data-testid="surpresinha-button"
    >
      <Gift className="w-5 h-5" />
    </Button>
  );
};

export default SurpresinhaButton;
