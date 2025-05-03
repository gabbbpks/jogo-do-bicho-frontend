
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const useBettingArea = () => {
  const [activeTab, setActiveTab] = useState("apostar");
  const [selectedBetType, setSelectedBetType] = useState<string | null>(null);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [selectedPrizes, setSelectedPrizes] = useState<string[]>([]);
  const [showQuickBetDialog, setShowQuickBetDialog] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Extract tipo and rapida from URL if available
  const searchParams = new URLSearchParams(location.search);
  const tipoFromURL = searchParams.get('tipo');
  const rapidaFromURL = searchParams.get('rapida');
  
  useEffect(() => {
    // Open quick bet dialog if rapida=true in URL
    if (rapidaFromURL === 'true') {
      setShowQuickBetDialog(true);
      // Update URL to remove rapida parameter (prevents dialog reopening on refresh)
      const newParams = new URLSearchParams(location.search);
      newParams.delete('rapida');
      navigate({
        pathname: location.pathname,
        search: newParams.toString()
      }, { replace: true });
    }
  }, [rapidaFromURL, navigate, location]);
  
  // Set initial bet type based on URL
  useEffect(() => {
    if (tipoFromURL) {
      switch(tipoFromURL) {
        case 'unidade': 
          setSelectedBetType('unidade');
          break;
        case 'dezena': 
          setSelectedBetType('dezena');
          break;
        case 'centena': 
          setSelectedBetType('centena');
          break;
        case 'milhar': 
          setSelectedBetType('milhar');
          break;
        default:
          setSelectedBetType(null);
      }
    }
  }, [tipoFromURL]);
  
  const handleNumberSelect = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  return {
    activeTab,
    setActiveTab,
    selectedBetType,
    setSelectedBetType,
    selectedNumbers,
    setSelectedNumbers,
    handleNumberSelect,
    selectedPrizes,
    setSelectedPrizes,
    showQuickBetDialog,
    setShowQuickBetDialog
  };
};
