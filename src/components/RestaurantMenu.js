import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantNestedCategory from "./RestaurantNestedCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data"

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="m-10">
      <h1 className="font-bold text-3xl">{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {category.map((category, index) =>
      // controlled component
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
          <RestaurantNestedCategory
            key={category?.card.card.title}
            data={category?.card.card}
          />
        ) : (
          <RestaurantCategory
            key={category?.card.card.title}
            data={category?.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
            index={index}
            dummy={dummy}
          />
        )
      )}
    </div>
  );
};

export default RestaurantMenu;
