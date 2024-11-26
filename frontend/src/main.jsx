import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AppRoutes from "./Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
