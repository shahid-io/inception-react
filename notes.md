# App.js

## Inception
- 0.1 Inception
```
    <script>
        const heading = document.createElement("h1")
        heading.innerHTML = "Hello, World."
        const root = document.getElementById("root")
        root.appendChild(heading)
    </script>
```

- 0.2 Inception
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
