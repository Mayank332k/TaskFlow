import { createContext, useContext, useReducer, useEffect } from "react";
import { taskReducer, initialState } from "./task-reducer";

// 1. Context create
export const TaskContext = createContext(null);

// 2. Provider component
export const TaskProvider = ({ children }) => {
  const getInitialState = () => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        return { tasks: JSON.parse(storedTasks) };
      }
    } catch (e) {
      console.error("Error reading tasks from localStorage", e);
    }
    return initialState;
  };

  const [state, dispatch] = useReducer(taskReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// 3. Custom hook (use this everywhere)
export const useTasks = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) {
    throw new Error("useTasks must be used inside TaskProvider");
  }
  return ctx;
};
