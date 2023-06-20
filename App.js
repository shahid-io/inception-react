import React from "react";
import ReactDOM from "react-dom/client";

import Data from "./swiggy.json";

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
  const { resData } = props;
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
    address,
  } = resData;
  return (
    <div className="resCards" style={styleCards}>
      <img
        alt="resLogo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <div className="cardText">
        <h3 className="resName">{name}</h3>
        <h3>{avgRating} stars</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>₹{costForTwo / 100} For Two</h4>
        <h5>Deliver in {deliveryTime} Min</h5>
        <p className="resAddress">Address - {address}</p>
      </div>
    </div>
  );
};

const resList = Data.data.cards;

//Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="search" className="searchInput" />
        <button name="submit" className="searchButton">
          search
        </button>
      </div>
      <div className="res-container">
        {resList.map((item) => (
          <RestaurantCard resData={item.data} />
        ))}
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
      <hr></hr>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
