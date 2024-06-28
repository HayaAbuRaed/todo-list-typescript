import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppThemeProvider from "./style/AppThemeProvider.tsx";
import { ToDosContextProvider } from "./context/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <ToDosContextProvider>
        <App />
      </ToDosContextProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
