import React, { useEffect } from "react";
import Task from "./Task";

const TaskList = (props) => {
  const sorted = props.tasksArray.sort((a, b) => a.priority - b.priority);

  useEffect(() => {}, [props.tasksArray]);

  return (
    <div id="task-list">
      <h4>Task List</h4>
      {sorted.map((task) => (
        <Task
          priority={task.priority}
          task={task.task}
          tasksArray={props.tasksArray}
          setTasksArray={props.setTasksArray}
          priorities={props.priorities}
          setPriorities={props.setPriorities}
          maxPriority={props.maxPriority}
          setMaxPriority={props.setMaxPriority}
        />
      ))}
    </div>
  );
};

export default TaskList;
