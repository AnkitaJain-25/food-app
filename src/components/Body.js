import RestaurantCard, { withHigherRatings } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  // State Variable - Super powerful variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const listOfRestaurants = useRestaurantList();
  const RestaurantHigherRated = withHigherRatings(RestaurantCard);

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Conditional and ternary Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-2 p-2">
          <input
            type="text"
            data-testid="search-input"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-2 py-2 bg-green-100 m-2 rounded-lg"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-2 p-2 flex items-center">
          <button
            className="px-2 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-2 p-2 flex items-center">
          <input
            type="text"
            data-testid="user-input"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap px-0.5">
        {/* Restaurant Cards */}
        {filteredRestaurants.map((restaurant) => (
          <div
            className="m-2 p-2 w-50 rounded-lg bg-gray-100 hover:scale-95 hover:origin-center hover:transition-all hover:duration-100 hover:ease-in"
            key={restaurant.info.id}
          >
            <Link
              to={"/restaurants/" + restaurant.info.id}
              className="resCard-menu"
            >
              {restaurant.info.avgRating > 4.6 ? (
                <RestaurantHigherRated resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
