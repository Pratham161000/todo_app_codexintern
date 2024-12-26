import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot for React 18+
import "./index.css";
import App from "./App";
import { TaskProvider } from "./context/TodoContext";

// Use createRoot for rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
