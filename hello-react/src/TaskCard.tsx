/* eslint-disable react/prop-types */
import React from "react";
import "./TaskCard.css";

const TaskCard = (props) => {
  if (props.dueDate) {
    return (
      <div className="TaskItem">
        <h3>{props.title}</h3>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    );
  } else {
    return (
      <div className="TaskItem">
        <h3>{props.title}</h3>
        <p>Completed on: {props.completedAtDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    );
  }
};

export default TaskCard;
