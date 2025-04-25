
import { Task, TaskStatus, useTaskContext } from "@/context/TaskContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";

interface TaskCardProps {
  task: Task;
  onStatusChange?: () => void;
  onDelete?: () => void;
}

export function TaskCard({ task, onStatusChange, onDelete }: TaskCardProps) {
  const { updateTaskStatus, deleteTask } = useTaskContext();

  const handleStatusChange = (value: TaskStatus) => {
    updateTaskStatus(task.id, value);
    if (onStatusChange) {
      onStatusChange();
    }
  };

  const handleDelete = () => {
    deleteTask(task.id);
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <Card className="p-4 glass fade-in">
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{task.title}</h3>
          <p className="text-sm text-muted-foreground">{task.description}</p>
          <p className="text-sm text-primary">
            Due: {format(task.deadline, "PPP")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select
            value={task.status}
            onValueChange={handleStatusChange}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="backlog">Backlog</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
