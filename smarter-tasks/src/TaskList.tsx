import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface TaskListProps {
  tasks: TaskItem[];
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  const handleDelete = (id: number) => {
    onDeleteTask(id);
  };

  const list = tasks.map((task, idx) => (
    <Task key={idx} item={task} removeTask={() => handleDelete(idx)} />
  ));

  return <>{list}</>;
};

export default TaskList;
