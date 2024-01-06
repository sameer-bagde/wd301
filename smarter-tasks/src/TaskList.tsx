import React from "react";
import Task from "./Task";
interface Props {
  tasks: TaskItem[];
}
interface TaskItem {
  title: string;
  description: string;
  duedate: string;
}
interface State {}
class TaskList extends React.Component<Props, State> {
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task
        key={idx}
        title={task.title}
        duedate={task.duedate}
        description={task.description}
      />
    ));
  }
}
export default TaskList;
