import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskInput, setTaskInput] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskInput, setEditTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === "") return;
    const newTask = { id: Date.now(), text: taskInput, completed: false };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEditing = (id, text) => {
    setEditTaskId(id);
    setEditTaskInput(text);
  };

  const saveEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editTaskInput } : task
      )
    );
    setEditTaskId(null);
    setEditTaskInput("");
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                {editTaskId === task.id ? (
                  <input
                    type="text"
                    value={editTaskInput}
                    onChange={(e) => setEditTaskInput(e.target.value)}
                  />
                ) : (
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "",
                    }}
                  >
                    {task.text}
                  </span>
                )}
              </td>
              <td className="todo-actions">
                {editTaskId === task.id ? (
                  <button
                    className="edit-btn"
                    onClick={() => saveEdit(task.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="edit-btn"
                    onClick={() => startEditing(task.id, task.text)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
                <button
                  className="complete-btn"
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
