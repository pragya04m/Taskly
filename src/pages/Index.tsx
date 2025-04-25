
import { TaskProvider, useTaskContext } from "@/context/TaskContext";
import { TaskForm } from "@/components/TaskForm";
import { TaskCard } from "@/components/TaskCard";
import { Stats } from "@/components/Stats";
import { Navigation } from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

function Dashboard() {
  const { tasks } = useTaskContext();
  const { toast } = useToast();

  const sortedTasks = [...tasks].sort(
    (a, b) => a.deadline.getTime() - b.deadline.getTime()
  );

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Taskly</h1>
          <TaskForm 
            onTaskAdded={() => {
              toast({
                title: "Task Added",
                description: "Your new task has been created successfully.",
              });
            }}
          />
        </div>
        
        <Navigation />
      </div>
      
      <Stats />
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Upcoming Tasks</h2>
        <div className="space-y-4">
          {sortedTasks.map((task) => (
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
    </div>
  );
}

const Index = () => {
  return (
    <TaskProvider>
      <Dashboard />
    </TaskProvider>
  );
};

export default Index;
