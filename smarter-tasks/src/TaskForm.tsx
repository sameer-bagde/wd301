import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  duedate: string;
  description: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      duedate: "",
      description: "",
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      duedate: this.state.duedate,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
    this.setState({ duedate: "" });
    this.setState({ description: "" });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  duedateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ duedate: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  inputRef = React.createRef<HTMLInputElement>();

  render() {
    return (
      <form onSubmit={this.addTask}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="todoTitle"
            type="text"
            className="border border-black rounded mb-2"
            value={this.state.title}
            onChange={this.titleChanged}
            required
          />
          <br />

          <label htmlFor="duedate">Due Date:</label>
          <input
            id="todoDueDate"
            type="date"
            className="border border-black rounded mb-2"
            value={this.state.duedate}
            onChange={this.duedateChanged}
            required
          />
          <br />
          <label htmlFor="description">Desciption:</label>
          <input
            id="todoDescription"
            type="text"
            className=" border border-black rounded mb-2"
            value={this.state.description}
            onChange={this.descriptionChanged}
            required
          />
          <br />
          <button id="addTaskButton" type="submit" className="TaskItem">
            Add item
          </button>
        </div>
      </form>
    );
  }
}
export default TaskForm;
