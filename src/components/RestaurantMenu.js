import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + id);
    const json = await data.json();

    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo);

  return (
    <div className="menu">
      <h1> {name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* <h2> Menu</h2> */}
      {/* <ul>
        {itemCards.map((data) => (
          <li>hey</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;

// Add menu card , as maybe API has changed
