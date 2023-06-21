import RestaurantCard from "./RestaurantCard";
import Data from "../../src/utils/data/swiggy.json";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/common/constants";
let resList = Data.data.cards;

// Body Component
const Body = () => {
  // Hooks
  const [restaurantList, setRestaurantList] = useState(resList);
  const [filterActive, setFilterActive] = useState(false);
  // useEffect Hooks
  useEffect(() => {
    fetchSwiggy;
  }, []);

  const fetchSwiggy = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    console.log(json.data);
    if (json.data.cards[2] !== undefined) {
      setRestaurantList(json.data.cards[2].data.data.cards);
    }
  };

  fetchSwiggy();
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
