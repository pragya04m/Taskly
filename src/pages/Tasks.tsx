
import { useTaskContext } from "@/context/TaskContext";
import { TaskCard } from "@/components/TaskCard";
import { TaskForm } from "@/components/TaskForm";
import { useToast } from "@/hooks/use-toast";

const Tasks = () => {
  const { tasks } = useTaskContext();
  const { toast } = useToast();

  const backlogAndInProgressTasks = tasks.filter(
    (task) => task.status === "backlog" || task.status === "in-progress"
  );

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <TaskForm 
          onTaskAdded={() => {
            toast({
              title: "Task Added",
              description: "Your new task has been created successfully.",
            });
          }}
        />
      </div>
      <div className="space-y-4">
        {backlogAndInProgressTasks.map((task) => (
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
};

export default Tasks;
