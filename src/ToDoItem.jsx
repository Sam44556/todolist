import React from "react";

function ToDoItem(props) {
  return (
    <div className="h">
      <li>{props.text}</li>
      <button onClick={() => {
        props.onChecked(props.id);
      }}>delet</button>
    </div>
  );
}

export default ToDoItem;
