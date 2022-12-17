import React, { useState } from "react";

function ToDoItem(props) {
  const [newStyle, setStyle] = useState(false);

  function handleClick(prevValue) {
    setStyle((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      style={{ textDecoration: newStyle ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {props.text}
    </li>
  );
}
export default ToDoItem;
