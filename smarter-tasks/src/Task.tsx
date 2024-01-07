import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps extends TaskItem {
  onDelete: () => void;
}

const Task = (props: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <li>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">{props.duedate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.description}
        </p>
        <button className="deleteTaskButton" id = "deleteTaskButton" onClick={props.onDelete}>
          Delete Task
        </button>
      </li>
    </div>
  );
};

export default Task;
