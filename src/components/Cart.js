import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="m-4 p-4">
      <h1 className="text-center text-xl font-bold">Cart</h1>
      <div>
        <div className="text-center">
          <button
            className="p-2 m-2 cursor-pointer bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 && (
          <h1 className="text-center">
            Your Cart is Empty. Add Items to the cart.
          </h1>
        )}
        {cartItems.map((item) => (
          <div key={item.info.id} className="flex">
            <CategoryItemList item={item} />
            <div className="text-center">
              <button
                className="p-2 m-2 cursor-pointer bg-black text-white rounded-lg"
                onClick={() => handleRemoveItem(item.info.id)}
              >
                Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
