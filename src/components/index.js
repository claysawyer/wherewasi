import React from 'react';
import { render } from 'react-dom';
import { createRoot } from "react-dom/client";
import App from './app.jsx';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);