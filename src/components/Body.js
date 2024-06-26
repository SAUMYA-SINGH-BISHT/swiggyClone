import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // fetching the API fetch returns promise
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining
    const value =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(value);
    setFilteredList(value);
  };
  // console.log(listOfRestaurant);

  const status = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (status === false) {
    return (
      <div>
        <h1>OPPS!!! SEEMS LIKE YOU ARE OFFLINE</h1>
      </div>
    );
  }

  // Conditional Rendering
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="border-2 border-black rounded-lg m-1 p-1"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value); // **(Imp)onchange is used to change State variable
            }}
          ></input>
          <button
            onClick={() => {
              const filteredValue = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
              });
              setFilteredList(filteredValue);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border-2 border-black rounded-md m-2 p-1"
          onClick={() => {
            const filtered = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredList(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredList.map((data) => (
          // useParams Hook
          <Link key={data.info.id} to={"/RestaurantMenu/" + data.info.id}>
            <RestaurantCard resData={data} />
          </Link>
        ))}
      </div>
      {/* <div className=" m-4 p-4 bg-blue-50">
        <label>HandsOn useContext:</label>
        <input
          className="border border-black p-2 m-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div> */}
    </div>
  );
};
export default Body;
// 1-for each loop use unique key for better performance (avoiding warnings)
// 2- for static website use reslist as dummy data is useState() import { resList } from "../utils/Mockdata";
