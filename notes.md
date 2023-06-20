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

### 3. Show me the code (Components)

- 3.0 Component based - `props` in the component

```
import React from "react";
import ReactDOM from "react-dom/client";

//Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          alt="logo"
          src="https://images.unsplash.com/photo-1547494784-d143dea885b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80"
        ></img>
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Cards CSS Object
const styleCards = {
  backgroundColor: "#f0f0f0",
};

//RestaurantCard Component
const RestaurantCard = (props) => {
  return (
    <div className="resCards" style={styleCards}>
      <img
        alt="resLogo"
        src="https://plus.unsplash.com/premium_photo-1673830185613-fba8baacca0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
      ></img>
      <h3 className="resName">{props.name}</h3>
      <h4>4.4 stars</h4>
      <p className="resDesc">{props.description}</p>
    </div>
  );
};

//Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" className="searchInput" />
        <button name="submit" className="searchButton">
          search
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard
          name="Garden Bistro"
          rating="5 stars"
          description=" The Garden Bistro is a charming and elegant restaurant located in the
        heart of a bustling city. Nestled amidst lush greenery, it offers a
        tranquil escape from the urban environment."
        />
        <RestaurantCard
          name="The Savory Spoon"
          rating="3 stars"
          description=" The Garden Bistro is a charming and elegant restaurant located in the
        heart of a bustling city. Nestled amidst lush greenery, it offers a
        tranquil escape from the urban environment."
        />
        <RestaurantCard
          name="Rustic Bistro"
          rating="3.5 stars"
          description=" The Garden Bistro is a charming and elegant restaurant located in the
        heart of a bustling city. Nestled amidst lush greenery, it offers a
        tranquil escape from the urban environment."
        />
        <RestaurantCard
          name="La Dolce Vita"
          rating="4 stars"
          description=" The Garden Bistro is a charming and elegant restaurant located in the
        heart of a bustling city. Nestled amidst lush greenery, it offers a
        tranquil escape from the urban environment."
        />
        <RestaurantCard
          name="Spice Fusion"
          rating="5 stars"
          description=" The Garden Bistro is a charming and elegant restaurant located in the
        heart of a bustling city. Nestled amidst lush greenery, it offers a
        tranquil escape from the urban environment."
        />
        <RestaurantCard
          name="The Hungry Rooster"
          rating="4.5 stars"
          description=" The Garden Bistro is a charming and elegant restaurant located in the
        heart of a bustling city. Nestled amidst lush greenery, it offers a
        tranquil escape from the urban environment."
        />
        <RestaurantCard
          name="Coastal Catch"
          rating="4 stars"
          description=" The Garden Bistro is a charming and elegant restaurant located in the
        heart of a bustling city. Nestled amidst lush greenery, it offers a
        tranquil escape from the urban environment."
        />
        <RestaurantCard
          name="The Golden Fork"
          rating="5 stars"
          description=" The Garden Bistro is a charming and elegant restaurant located in the
        heart of a bustling city. Nestled amidst lush greenery, it offers a
        tranquil escape from the urban environment."
        />
        <RestaurantCard
          name="Café Bliss"
          rating="5 stars"
          description=" The Garden Bistro is a charming and elegant restaurant located in the
        heart of a bustling city. Nestled amidst lush greenery, it offers a
        tranquil escape from the urban environment."
        />
        <RestaurantCard
          name="The Secret Garden"
          rating="4 stars"
          description=" The Garden Bistro is a charming and elegant restaurant located in the
        heart of a bustling city. Nestled amidst lush greenery, it offers a
        tranquil escape from the urban environment."
        />
      </div>
    </div>
  );
};

// AppLayout Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <hr></hr>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
```
### Body Code
```
import RestaurantCard from "./RestaurantCard";
import Data from "../../src/utils/data/swiggy.json";
import { useState } from "react";
let resList = Data.data.cards;

//Body Component
const Body = () => {
  //Hooks
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="search" className="searchInput" />
        <button name="submit" className="searchButton">
          search
        </button>
        <div className="filter">
          <button
            type="submit"
            className="filterButton"
            onClick={() => {
              let filteredList = restaurantList.filter(
                (item) => item.data.avgRating > 4
              );
              console.log(filteredList);
              setRestaurantList(filteredList);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {restaurantList.map((item) => (
          <RestaurantCard key={item.data.id} resList={item.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```
