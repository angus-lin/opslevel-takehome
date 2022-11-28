import React, { useState, useEffect } from "react";
import Header from "./Header";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const ToDoList = () => {
  const [maxPriority, setMaxPriority] = useState(1);
  const [priorities, setPriorities] = useState(new Set());

  const [newPriority, setNewPriority] = useState(1);
  const [newTask, setNewTask] = useState("");

  const [tasksArray, setTasksArray] = useState([]);

  return (
    <div id="main-container">
      <Header priorities={priorities} maxPriority={maxPriority} />
      <TaskInput
        newPriority={newPriority}
        setNewPriority={setNewPriority}
        newTask={newTask}
        setNewTask={setNewTask}
        priorities={priorities}
        setPriorities={setPriorities}
        maxPriority={maxPriority}
        setMaxPriority={setMaxPriority}
        tasksArray={tasksArray}
        setTasksArray={setTasksArray}
      />
      <TaskList
        tasksArray={tasksArray}
        setTasksArray={setTasksArray}
        priorities={priorities}
        setPriorities={setPriorities}
        maxPriority={maxPriority}
        setMaxPriority={setMaxPriority}
      />
    </div>
  );
};

export default ToDoList;
