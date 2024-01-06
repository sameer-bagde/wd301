import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  duedate: string;
  description: string;
  tasks: TaskItem[];
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      duedate: "",
      description: "",
      tasks: [], // Store tasks
    };
  }

  addTask = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, duedate, description } = this.state;

    if (title.trim() !== "" && duedate.trim() !== "") {
      const newTask: TaskItem = {
        title,
        duedate,
        description,
      };

      this.props.addTask(newTask);

      // Update tasks in state
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
        title: "",
        duedate: "",
        description: "",
      }));
    } else {
      alert("Title and Due Date are required fields!");
    }
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ title: event.target.value });
  };

  duedateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ duedate: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ description: event.target.value });
  };

  render() {
    const { tasks } = this.state;

    return (
      <div>
        {/* Display existing tasks */}
        {tasks.map((task, index) => (
          <div key={index} className="TaskItem">
            <p>Title: {task.title}</p>
            <p>Due Date: {task.duedate}</p>
            <p>Description: {task.description}</p>
          </div>
        ))}

        {/* Form for adding tasks */}
        <form onSubmit={this.addTask}>
          <label htmlFor="todoTitle" className="TaskItem">
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

          <label htmlFor="todoDueDate" className="TaskItem">
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

          <label htmlFor="todoDescription" className="TaskItem">
            Description:
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
      </div>
    );
  }
}

export default TaskForm;
