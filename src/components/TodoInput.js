import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoInput = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
