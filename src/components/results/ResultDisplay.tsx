
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Draw } from "@/types/results";

interface ResultDisplayProps {
  draws: Draw[];
  selectedDraw: string;
}

const ResultDisplay = ({ draws, selectedDraw }: ResultDisplayProps) => {
  return (
    <>
      {draws
        .filter((draw) => draw.id.toString() === selectedDraw)
        .map((draw) => (
          <Card key={draw.id} className="mb-6 overflow-hidden bg-black/20 border-purple-800/30">
            <CardHeader className="bg-purple-800 text-white">
              <CardTitle className="flex justify-between">
                <span>Resultado - Extração {draw.time}</span>
                <span>{format(new Date(draw.date), "dd/MM/yyyy")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                {draw.results.map((result, index) => (
                  <div
                    key={index}
                    className="p-4 text-center border border-purple-800/30 rounded-md bg-purple-900/10 hover:bg-purple-900/20 transition-colors"
                  >
                    <div className="mb-2 text-3xl font-bold">
                      {String(result.numbers[0]).padStart(4, "0")}
                    </div>
                    <div className="text-yellow-300 font-medium">
                      {result.animal}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
    </>
  );
};

export default ResultDisplay;
