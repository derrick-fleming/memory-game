import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./app";

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(
  <>
    <HashRouter>
        <App />
    </HashRouter>
  </>
);
