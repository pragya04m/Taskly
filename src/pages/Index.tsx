
import { TaskProvider } from "@/context/TaskContext";
import { TaskForm } from "@/components/TaskForm";
import { TaskCard } from "@/components/TaskCard";
import { Stats } from "@/components/Stats";
import { useTaskContext } from "@/context/TaskContext";

function Dashboard() {
  const { tasks } = useTaskContext();
  
  const sortedTasks = [...tasks].sort(
    (a, b) => a.deadline.getTime() - b.deadline.getTime()
  );

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Task Dashboard</h1>
        <TaskForm />
      </div>
      
      <Stats />
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Upcoming Tasks</h2>
        <div className="space-y-4">
          {sortedTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
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
