import { HEADER_LOGO } from "../utils/common/constants";
//Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" src={HEADER_LOGO}></img>
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

export default Header;
