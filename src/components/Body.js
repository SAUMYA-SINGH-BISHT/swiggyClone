import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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
            className="search-box"
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
          <RestaurantCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
// 1-for each loop use unique key for better performance (avoiding warnings)
// 2- for static website use reslist as dummy data is useState() import { resList } from "../utils/Mockdata";
