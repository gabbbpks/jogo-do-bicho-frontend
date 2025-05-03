
import React from "react";
import { Button } from "@/components/ui/button";

interface ConfirmBetButtonProps {
  isSubmitting: boolean;
  onClick: () => void;
}

const ConfirmBetButton = ({ isSubmitting, onClick }: ConfirmBetButtonProps) => {
  return (
    <div className="mt-6">
      <Button 
        className="w-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white py-6 h-auto text-lg font-bold" 
        size="lg"
        onClick={onClick}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processando..." : "Confirmar Aposta"}
      </Button>
    </div>
  );
};

export default ConfirmBetButton;
