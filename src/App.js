import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

// AppLayout Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <hr></hr>
      <Body />
      <hr></hr>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
