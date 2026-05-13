import React from "react";
import ReactDOM from "react-dom/client";
import Portflio from "./Portflio";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  React.createElement(React.StrictMode, null,
    React.createElement(Portflio, null)
  )
);
