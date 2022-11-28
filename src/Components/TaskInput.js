import React from "react";

const TaskInput = (props) => {
  const lowestPriority = (max, prioritiesSet) => {
    if (prioritiesSet.size === max) {
      return max + 1;
    }

    let i = 1;
    while (i < max) {
      if (!prioritiesSet.has(i)) {
        return String(i);
      }
      i++;
    }
    return String(max + 1);
  };

  const handleTask = (e) => {
    props.setNewTask(e.target.value);
  };
  const handlePriority = (e) => {
    props.setNewPriority(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (props.newTask.trim() === "") {
      alert("Task must have a name");
      return;
    }

    let priority = 0;

    try {
      priority = Number(props.newPriority);
      if (Number.isInteger(priority) && priority > 0) {
        props.setNewPriority(priority);
      } else {
        props.setNewPriority("");
        alert("Priority must be an integer over 0");
        return;
      }
    } catch {
      alert("Priority must be an integer over 0");
      return;
    }

    if (props.priorities.has(priority)) {
      alert("This priority number is already in the to-do list");
      return;
    } else {
      props.setPriorities(props.priorities.add(priority));
      props.setMaxPriority(Math.max(priority, props.maxPriority));
    }

    props.tasksArray.push({
      priority: priority,
      task: props.newTask,
    });

    props.setTasksArray(props.tasksArray);

    props.setNewPriority(lowestPriority(props.maxPriority, props.priorities));
    props.setNewTask("");
  };

  return (
    <div>
      <label>
        Task:
        <input
          value={props.newTask}
          onChange={handleTask}
          type="text"
          name="name"
        />
      </label>
      <label>
        Priority:
        <input
          value={props.newPriority}
          onChange={handlePriority}
          type="text"
          name="name"
        />
      </label>
      <input onClick={onSubmit} type="submit" value="Submit" />
    </div>
  );
};

export default TaskInput;
