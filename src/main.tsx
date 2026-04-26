import React from 'react';
// import { createRoot } from "react-dom/client";
import { createRoot } from 'react-dom/client';
// import App from "./App.tsx";
import App from './App.tsx';
// import "./index.css";
import './index.css';

// createRoot(document.getElementById("root")!).render(<App />);
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}