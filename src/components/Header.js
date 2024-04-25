import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing the store using selector/ reading
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="No_Logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart({cartItem.length})</Link>
          </li>
          <li className="text-l font-bold text-cyan-200">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
