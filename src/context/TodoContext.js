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
