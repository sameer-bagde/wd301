import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface TaskListProps {
  tasks: TaskItem[];
  onDeleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  const handleDelete = (index: number) => {
    onDeleteTask(index);
  };

  const list = tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      description={task.description}
      duedate={task.duedate}
      onDelete={() => handleDelete(idx)}
    />
  ));

  return <>{list}</>;
};

export default TaskList;
