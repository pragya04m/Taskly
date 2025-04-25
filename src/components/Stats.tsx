
import { Card } from "@/components/ui/card";
import { CirclePercent } from "lucide-react";
import { useTaskContext } from "@/context/TaskContext";

export function Stats() {
  const { stats } = useTaskContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="p-4 glass">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Total Tasks</p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
      </Card>
      <Card className="p-4 glass">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Completed Tasks</p>
          <p className="text-2xl font-bold">{stats.completed}</p>
        </div>
      </Card>
      <Card className="col-span-2 p-4 glass">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Completion Rate</p>
            <p className="text-2xl font-bold">{stats.completionPercentage}%</p>
          </div>
          <CirclePercent className="h-8 w-8 text-primary" />
        </div>
      </Card>
    </div>
  );
}
