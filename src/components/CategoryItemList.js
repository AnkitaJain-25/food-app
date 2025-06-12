import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CategoryItemList = ({ item, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="w-8/12 mx-auto px-4">
      <div className="flex justify-between">
        <div className="py-1">
          <div className="font-bold">{item.info.name}</div>
          <div className="font-thin">
            {" Rs. "}
            {(item.info.price || item.info.defaultPrice) / 100}
          </div>
          <div className="font-thin flex-wrap">{item.info.description}</div>
        </div>
        <div className="ms-14 w-3/12 flex justify-center">
          {item?.info.imageId && (
            <img
              className="rounded-lg min-w-40 object-cover"
              alt="res-logo"
              src={CDN_URL + item.info.imageId}
            />
          )}
          <div className="absolute">
            <button
              className="p-2 rounded-lg shadow-lg bg-black text-white cursor-pointer"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-[0.5px] h-[0.5px] my-10"></div>
    </div>
  );
};

export default CategoryItemList;
