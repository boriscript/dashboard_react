import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkContextProvider } from "./context/darkContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkContextProvider>
      <App />
    </DarkContextProvider>
  </React.StrictMode>
);
