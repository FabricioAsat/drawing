import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ShapeProvider } from "./context/ShapeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShapeProvider>
      <App />
    </ShapeProvider>
  </StrictMode>
);
