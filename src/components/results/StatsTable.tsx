
interface StatsTableProps {
  title: string;
  data: Array<{
    num: string;
    times: number;
    position?: string;
  }>;
  showPosition?: boolean;
}

const StatsTable = ({ title, data, showPosition = false }: StatsTableProps) => {
  return (
    <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg overflow-hidden">
      <div className="bg-[#6A48F3]/30 p-2 text-center">
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="p-0">
        <table className="w-full">
          <thead className="bg-[#12111F]">
            <tr>
              {showPosition && (
                <th className="p-2 text-center text-xs text-purple-300">Posição</th>
              )}
              <th className="p-2 text-left">{title}</th>
              <th className="p-2 text-right">Vezes que saiu</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t border-[#2A2D45]">
                {showPosition && (
                  <td className="p-2 text-center text-xs text-purple-300">{item.position || `${index+1}º`}</td>
                )}
                <td className="p-2 text-left font-medium">
                  {!showPosition && `${index+1}º `}{item.num}
                </td>
                <td className="p-2 text-right">{item.times} vezes</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsTable;
