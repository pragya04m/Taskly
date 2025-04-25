
import { TaskProvider, useTaskContext } from "@/context/TaskContext";
import { TaskCard } from "@/components/TaskCard";
import { useToast } from "@/hooks/use-toast";

function CompletedTasks() {
  const { tasks } = useTaskContext();
  const { toast } = useToast();

  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Completed Tasks</h1>
      <div className="space-y-4">
        {completedTasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task}
            onStatusChange={() => {
              toast({
                title: "Task Updated",
                description: "Task status has been updated successfully.",
              });
            }}
            onDelete={() => {
              toast({
                title: "Task Deleted",
                description: "Task has been deleted successfully.",
                variant: "destructive",
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}

const Completed = () => {
  return (
    <TaskProvider>
      <CompletedTasks />
    </TaskProvider>
  );
};

export default Completed;
