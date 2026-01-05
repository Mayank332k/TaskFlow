import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthProvider from "./Store/Auth-store";
import { TaskProvider } from "./Store/Data-Context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </AuthProvider>
  </StrictMode>
);
