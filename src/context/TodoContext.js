// import React, { createContext, useState } from 'react';

// // Create the context
// export const TodoContext = createContext();

// // Provider component
// export const TodoProvider = ({ children }) => {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (text) => {
//     setTodos([...todos, { id: Date.now(), text, completed: false }]);
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const updateTodo = (id, newText) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, text: newText } : todo
//       )
//     );
//   };

//   return (
//     <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const editTask = (index, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? updatedTask : task))
    );
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TodoContext.Provider>
  );
};
