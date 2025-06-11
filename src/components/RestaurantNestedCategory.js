import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantNestedCategory = ({ data }) => {
  const [showNestedIndex, setShowNestedIndex] = useState(null);
  return (
    <div>
      <div className="w-8/12 mx-auto my-4 shadow-lg p-4 flex justify-between bg-gray-50">
        <span className="font-bold text-lg">{data.title}</span>
      </div>
      {data.categories.map((c, index) => (
        <RestaurantCategory
           key={c.title}
          data={c}
          isNested={true}
          showItems={showNestedIndex === index}
          setShowIndex={() => setShowNestedIndex(showNestedIndex === index ? null : index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default RestaurantNestedCategory;
