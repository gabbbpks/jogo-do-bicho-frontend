
interface BetOddsDisplayProps {
  odds: string | null;
  potentialWin: number | null;
}

const BetOddsDisplay = ({ odds, potentialWin }: BetOddsDisplayProps) => {
  if (!odds) return null;
  
  return (
    <div className="mt-4 p-3 bg-[#12111F] border border-[#2A2D45] rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-300">Multiplicador</p>
          <p className="text-[#3B82F6] font-bold">{odds}</p>
        </div>
        <div>
          <p className="text-sm text-gray-300">Ganho potencial</p>
          <p className="text-green-400 font-bold">R$ {potentialWin ? potentialWin.toFixed(2) : '0.00'}</p>
        </div>
      </div>
    </div>
  );
};

export default BetOddsDisplay;
