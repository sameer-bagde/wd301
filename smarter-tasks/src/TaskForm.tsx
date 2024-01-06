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
      description: this.state.duedate,
    };
    this.props.addTask(newTask);
    this.setState({
      title: "",
      duedate: "",
      description: "",
    });
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
  // inputRef = React.createRef<HTMLInputElement>();

  render() {
    return (
      <form onSubmit={this.addTask}>
        <label htmlFor="title" className="TaskItem">
          Title:
        </label>
        <input
          id="todoTitle"
          placeholder="Enter the title"
          type="text"
          value={this.state.title}
          onChange={this.titleChanged}
          required
        />
        <br />

        <label htmlFor="duedate" className="TaskItem">
          Due Date:
        </label>
        <input
          id="todoDueDate"
          placeholder="Enter the due date"
          type="text"
          value={this.state.duedate}
          onChange={this.duedateChanged}
          required
        />
        <br />
        <label htmlFor="description" className="TaskItem">
          Desciption:
        </label>
        <input
          id="todoDescription"
          placeholder="Enter the description"
          type="text"
          value={this.state.description}
          onChange={this.descriptionChanged}
        />
        <br />
        <button id="addTaskButton" type="submit">
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
