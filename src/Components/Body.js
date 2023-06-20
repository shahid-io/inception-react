
import RestaurantCard from "./RestaurantCard";
import Data from "../../src/utils/data/swiggy.json";
import { useState } from "react";

let resList = Data.data.cards;

// Body Component
const Body = () => {
  // Hooks
  const [restaurantList, setRestaurantList] = useState(resList);
  const [filterActive, setFilterActive] = useState(false);

  const handleFilterClick = () => {
    let filteredList = [];
    if (filterActive) {
      filteredList = resList;
    } else {
      filteredList = restaurantList.filter((item) => item.data.avgRating > 4);
    }

    console.log(filteredList);
    setRestaurantList(filteredList);
    setFilterActive(!filterActive);
  };

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
            className={`filterButton ${filterActive ? "active" : ""}`}
            onClick={handleFilterClick}
          >
            {filterActive ? "All Restaurants" : "Top Restaurants"}
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
