import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

// We Wrapped The App With AuthContext So That The Data Will Get Pass To All The Files And Users
createRoot(document.getElementById("root")).render(
  // We Wrapped The App With StrictMode So That The Data Will Get Passed To All The Files And Users And We Can Use The Latest Features Of React, And For AuthProvider We Have To Pass The Children As The Prop So That The Data Will Get Passed To All The Files And Users
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
