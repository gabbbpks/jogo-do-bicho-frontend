
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { userAPI } from "@/services/api";
import LoginPrompt from "@/components/game/LoginPrompt";
import GameTabs from "@/components/game/GameTabs";
import BetTypeSelection from "@/components/game/BetTypeSelection";
import NumberSelectionSection from "@/components/game/NumberSelectionSection";
import BetSidebar from "@/components/game/BetSidebar";
import QuickBetSection from "@/components/game/QuickBetSection";
import TabContent from "@/components/game/TabContent";
import BetForm from "@/components/game/BetForm";
import { Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "react-router-dom";

const GamePage = () => {
  const [selectedTab, setSelectedTab] = useState("bicho");
  const [selectedBetType, setSelectedBetType] = useState<string | null>(null);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [selectedPrizes, setSelectedPrizes] = useState<string[]>(["1"]);
  const [selectedDrawTime, setSelectedDrawTime] = useState<string>("10h Bahia");
  const { isAuthenticated, user } = useAuth();
  const [saldo, setSaldo] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // Get query parameters from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tipoParam = searchParams.get('tipo');
    
    if (tipoParam) {
      setSelectedBetType(tipoParam);
    }
    
    const rapidaParam = searchParams.get('rapida');
    if (rapidaParam === 'true') {
      // Show quick bet dialog if needed
    }
  }, [location]);

  useEffect(() => {
    const fetchSaldo = async () => {
      if (!isAuthenticated || !user?.id) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const response = await userAPI.getSaldo(user.id);
        setSaldo(response.data.saldo);
      } catch (error) {
        console.error('Erro ao buscar saldo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSaldo();
  }, [isAuthenticated, user]);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    
    // Reset selections when changing tabs
    if (value !== "bicho") {
      setSelectedBetType(null);
      setSelectedNumbers([]);
    }
  };

  const handleBetTypeSelect = (type: string) => {
    setSelectedBetType(type);
    // Reset number selections when changing bet type
    setSelectedNumbers([]);
  };

  const handleNumberSelect = (number: number) => {
    let maxSelections = 1;
    
    // Determine max selections based on bet type
    if (selectedBetType === "milhar") maxSelections = 4;
    else if (selectedBetType === "centena") maxSelections = 3;
    else if (selectedBetType === "dezena" || 
             selectedBetType === "duque-dezena" || 
             selectedBetType === "duque-grupo") maxSelections = 2;
    else if (selectedBetType === "terno-dezena" || 
             selectedBetType === "terno-grupo") maxSelections = 3;
    
    // Handle selection based on bet type
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else {
      // For sequential formats like milhar/centena/dezena
      if (["milhar", "centena", "dezena"].includes(selectedBetType || "")) {
        if (selectedNumbers.length < maxSelections) {
          setSelectedNumbers([...selectedNumbers, number]);
        }
      } 
      // For multiple selections like terno/duque
      else if (["terno-dezena", "terno-grupo", "duque-dezena", "duque-grupo"].includes(selectedBetType || "")) {
        if (selectedNumbers.length < maxSelections) {
          setSelectedNumbers([...selectedNumbers, number]);
        }
      } 
      // For single selections like unidade/dezena-fortuna
      else {
        setSelectedNumbers([number]);
      }
    }
  };

  const handlePrizeSelect = (prizes: string[]) => {
    setSelectedPrizes(prizes);
  };
  
  const handleDrawTimeSelect = (drawTime: string) => {
    setSelectedDrawTime(drawTime);
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <span className="w-8 h-8 bg-[#6A48F3] rounded-full flex items-center justify-center mr-2 text-sm">🎲</span>
        Área de Apostas
      </h1>

      {!isAuthenticated ? (
        <LoginPrompt />
      ) : (
        <>
          {loading ? (
            <div className="flex justify-center py-6 mb-6">
              <div className="animate-pulse flex space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
            </div>
          ) : (
            <Card className="glass-card p-4 mb-6">
              <CardContent className="flex items-center p-2">
                <Wallet className="w-5 h-5 mr-2 text-green-400" />
                <div>
                  <span className="text-sm text-gray-400">Seu saldo atual:</span>
                  <span className="ml-2 font-bold text-green-400">R$ {saldo?.toFixed(2).replace('.', ',') || '0,00'}</span>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            <div className="col-span-1 lg:col-span-4">
              <div className="mb-6">
                <GameTabs 
                  selectedTab={selectedTab}
                  onTabChange={handleTabChange}
                />
              </div>

              <TabContent selectedTab={selectedTab} />
              
              {selectedBetType && (
                <BetForm
                  selectedTab={selectedTab}
                  selectedAnimal={null}
                  selectedNumber={null}
                  selectedBetType={selectedBetType}
                  selectedNumbers={selectedNumbers}
                  selectedPrizes={selectedPrizes}
                  selectedDrawTime={selectedDrawTime}
                />
              )}
            </div>

            <div className="col-span-1 lg:col-span-2">
              <BetSidebar 
                selectedPrizes={selectedPrizes}
                onSelectPrize={handlePrizeSelect}
                selectedDrawTime={selectedDrawTime}
                onSelectDrawTime={handleDrawTimeSelect}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GamePage;
