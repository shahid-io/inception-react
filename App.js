import React from "react";
import ReactDOM from "react-dom/client";

import Data from "./swiggy.json";

console.log(Data.data.cards[0].data.name);
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
  return (
    <div className="resCards" style={styleCards}>
      <img
        alt="resLogo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.data.cards[0].data.cloudinaryImageId
        }
      ></img>
      <h3 className="resName">{resData.data.cards[0].data.name}</h3>
      <h3>{resData.data.cards[0].data.avgRating} stars</h3>
      <h4>{resData.data.cards[0].data.cuisines.join(", ")}</h4>
      <h4>{resData.data.cards[0].data.costForTwo / 100}</h4>
      <h5>{resData.data.cards[0].data.deliveryTime} Min</h5>
      <p className="resDesc"></p>
    </div>
  );
};

//RestaurantCard Component
const RestaurantCards = (props) => {
  const { resData } = props;
  return (
    <div className="resCards">
      <img
        alt="resLogo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.data.cards[0].data.cloudinaryImageId
        }
      ></img>
      <h3 className="resName">{resData.data.cards[0].data.name}</h3>
      <h3>{resData.data.cards[0].data.avgRating} stars</h3>
      <h4>{resData.data.cards[0].data.cuisines.join(", ")}</h4>
      <h4>{resData.data.cards[0].data.costForTwo / 100}</h4>
      <h5>{resData.data.cards[0].data.deliveryTime} Min</h5>
      <p className="resDesc"></p>
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
        <RestaurantCard resData={Data} />
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
