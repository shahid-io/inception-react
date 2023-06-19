import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
  "h1",
  { style: { color: "skyblue" }, id: "heading" },
  "ignite app"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
