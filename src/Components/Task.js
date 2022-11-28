import React, { useState } from "react";

const Task = (props) => {
  const findTaskByPriority = () => {
    let left = 0;
    let right = props.tasksArray.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (props.tasksArray[mid].priority === props.priority) {
        return mid;
      } else if (props.tasksArray[mid].priority < props.priority) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  };

  const removeItem = (e) => {
    e.preventDefault();

    props.tasksArray.splice(findTaskByPriority(props.priority), 1);
    props.priorities.delete(props.priority);
    props.setPriorities(props.priorities);

    props.setTasksArray([...props.tasksArray]);

    if (props.tasksArray.length > 0) {
      if (props.priority === props.maxPriority) {
        props.setMaxPriority(
          props.tasksArray[props.tasksArray.length - 1].priority
        );
      }
    } else {
      props.setMaxPriority(1);
    }
  };

  return (
    <div className="task">
      <div className="task-text">
        <p>
          <strong>Task: </strong>
          {props.task}
        </p>
        <p>
          <strong>Priority: </strong>
          {props.priority}
        </p>
      </div>
      <div className="remove">
        <button onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
};

export default Task;
