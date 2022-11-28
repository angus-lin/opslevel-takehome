import React from "react";

const missingPriorities = (max, prioritiesSet) => {
  let output = new Array(max - prioritiesSet.size);
  let i = 0;
  let num = 1;
  while (num < max) {
    if (!prioritiesSet.has(num)) {
      output[i] = num;
      i++;
    }
    num++;
  }
  return output;
};

const Header = (props) => {
  return (
    <div>
      <h1>To do list</h1>
      <p>
        {props.maxPriority === props.priorities.size ||
        props.priorities.size === 0
          ? ""
          : "Missing Priorities:"}
      </p>
      <p>{missingPriorities(props.maxPriority, props.priorities).join(", ")}</p>
    </div>
  );
};

export default Header;
