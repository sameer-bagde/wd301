import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      description={task.description}
      duedate={task.duedate}
    />
  ));
  return <>{list}</>;
};
export default TaskList;
