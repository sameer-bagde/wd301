import React from "react";
import { TaskItem } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    },
  );
  const addTask = (task: TaskItem) => {
    if (!task.title) {
      alert("Title requried!");
      return;
    }
    if (!task.duedate) {
      alert("Due Date required!");
      return;
    }
    if (!task.description) {
      task.description = "Description Not Provided!";
    }
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  React.useState<TaskAppState>;

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} />
        </div>
      </div>
    </div>
  );
};
export default TaskApp;
