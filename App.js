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
const RestaurantCard = () => {
  return (
    <div className="resCards" style={styleCards}>
      <img
        alt="resLogo"
        src="https://plus.unsplash.com/premium_photo-1673830185613-fba8baacca0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
      ></img>
      <h3 className="resName">Garden Bistro</h3>
      <p className="resDesc">
        The Garden Bistro is a charming and elegant restaurant located in the
        heart of a bustling city. Nestled amidst lush greenery, it offers a
        tranquil escape from the urban environment. As you step inside, you are
        greeted by a serene atmosphere and a warm, inviting ambiance.
      </p>
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
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
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
