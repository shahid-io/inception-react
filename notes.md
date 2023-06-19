# App.js

## 1. Inception

- 1.0 Inception

```
    <script>
        const heading = document.createElement("h1")
        heading.innerHTML = "Hello, World."
        const root = document.getElementById("root")
        root.appendChild(heading)
    </script>
```

- 1.1 Inception

```
const heading = React.createElement(
  "h1",
  { style: { color: "skyblue", border: "1px solid green", width: "130px" } },
  "inception"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);

/**
 * <div id="parent">
 *  <div id="child">
 *      <h1></h1>
 *      <p></p>
 *  </div>
 * </div>
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello, World"),
    React.createElement(
      "p",
      { style: { color: "green" } },
      "A sibling tag of child"
    ),
  ])
);
root.render(parent);
```

### 2. Ignite App

- 2.0 Ignite

```
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
```
