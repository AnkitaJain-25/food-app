import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({
  data,
  isNested,
  showItems,
  setShowIndex,
  index,
  dummy,
}) => {
  const handleClick = () => {
    setShowIndex(showItems ? null : index);
  };

  return (
    <div>
      <div
        className={
          isNested
            ? "w-8/12 mx-auto my-4 p-4 flex justify-between cursor-pointer"
            : "w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between cursor-pointer"
        }
        onClick={handleClick}
      >
        <span className={isNested ? "font-medium" : "font-bold text-lg"}>
          {data.title} ({data.itemCards.length})
        </span>
        <span className="font-bold">{showItems ? "∧" : "∨"}</span>
      </div>

      {showItems &&
        data.itemCards.map((item) => (
          <CategoryItemList
            item={item.card}
            key={item.card.info.id}
            dummy={dummy}
          />
        ))}
    </div>
  );
};

export default RestaurantCategory;
