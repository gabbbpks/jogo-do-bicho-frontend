
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { Draw } from "@/types/results";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

interface ResultHistoryProps {
  draws: Draw[];
}

const ResultHistory = ({ draws }: ResultHistoryProps) => {
  return (
    <Card className="bg-black/20 border-purple-800/30">
      <CardContent className="p-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-purple-800 text-white">
                <TableHead className="text-left text-white font-medium">Data</TableHead>
                <TableHead className="text-left text-white font-medium">Horário</TableHead>
                <TableHead className="text-left text-white font-medium">1° Prêmio</TableHead>
                <TableHead className="text-left text-white font-medium">2° Prêmio</TableHead>
                <TableHead className="text-left text-white font-medium">3° Prêmio</TableHead>
                <TableHead className="text-left text-white font-medium">4° Prêmio</TableHead>
                <TableHead className="text-left text-white font-medium">5° Prêmio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {draws.map((draw) => (
                <TableRow key={draw.id} className="border-b hover:bg-purple-900/10">
                  <TableCell className="p-3 border">
                    {format(new Date(draw.date), "dd/MM/yyyy")}
                  </TableCell>
                  <TableCell className="p-3 border font-medium">{draw.time}</TableCell>
                  {draw.results.map((result, index) => (
                    <TableCell key={index} className="p-3 border">
                      <div className="text-lg font-bold">{String(result.numbers[0]).padStart(4, "0")}</div>
                      <div className="text-sm text-yellow-300">
                        {result.animal}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultHistory;
