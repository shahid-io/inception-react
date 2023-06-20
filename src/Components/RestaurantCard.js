import { CARDS_IMG_URL } from "../utils/common/constants";

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
      <img alt="resLogo" src={CARDS_IMG_URL + cloudinaryImageId}></img>
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

export default RestaurantCard;
