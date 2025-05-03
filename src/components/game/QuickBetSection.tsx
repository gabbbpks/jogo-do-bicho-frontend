
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import QuickBetDialog from "./QuickBetDialog";

const QuickBetSection = () => {
  const { toast } = useToast();
  const [showDialog, setShowDialog] = useState(false);
  
  const handleQuickBet = () => {
    setShowDialog(true);
  };

  return (
    <>
      <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Rapidinha</h2>
        <p className="text-gray-400 mb-4">
          Não perca tempo, nós fazemos uma aposta para você com as modalidades mais jogadas
        </p>
        <Button 
          className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold"
          onClick={handleQuickBet}
        >
          Apostar Agora!
        </Button>
      </div>
      
      <QuickBetDialog 
        open={showDialog} 
        onClose={() => setShowDialog(false)} 
      />
    </>
  );
};

export default QuickBetSection;
