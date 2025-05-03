
import BettingPageLayout from "@/components/game/BettingPageLayout";
import BettingTabsContainer from "@/components/game/BettingTabsContainer";
import BetActions from "@/components/game/BetActions";
import QuickBetDialog from "@/components/game/QuickBetDialog";
import QuickBetSection from "@/components/game/QuickBetSection";
import BetTypeSelection from "@/components/game/BetTypeSelection";
import BetNumbersSection from "@/components/game/BetNumbersSection";
import BetSidebar from "@/components/game/BetSidebar";
import { useBettingArea } from "@/hooks/useBettingArea";

const BettingAreaPage = () => {
  const {
    activeTab,
    setActiveTab,
    selectedBetType,
    setSelectedBetType,
    selectedNumbers,
    handleNumberSelect,
    selectedPrizes,
    setSelectedPrizes,
    showQuickBetDialog,
    setShowQuickBetDialog
  } = useBettingArea();
  
  const renderBettingContent = () => (
    <>
      <QuickBetSection />
      <BetTypeSelection selectedBetType={selectedBetType} onSelectBetType={setSelectedBetType} />
      <BetNumbersSection selectedNumbers={selectedNumbers} onSelectNumber={handleNumberSelect} />
    </>
  );

  return (
    <BettingPageLayout
      title="Área de Apostas"
      mainContent={
        <BettingTabsContainer
          initialActiveTab={activeTab}
          onTabChange={setActiveTab}
        >
          {renderBettingContent()}
        </BettingTabsContainer>
      }
      sidebarContent={
        <BetSidebar 
          selectedPrizes={selectedPrizes} 
          onSelectPrize={setSelectedPrizes} 
        />
      }
    >
      <BetActions
        selectedBetType={selectedBetType}
        selectedNumbers={selectedNumbers}
        selectedPrizes={selectedPrizes}
      />
      
      <QuickBetDialog
        open={showQuickBetDialog}
        onClose={() => setShowQuickBetDialog(false)}
      />
    </BettingPageLayout>
  );
};

export default BettingAreaPage;
