import RestaurantCard from "./RestaurantCard";
import Data from "../../src/utils/data/swiggy.json";
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
          <RestaurantCard key={item.data.id} resData={item.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
