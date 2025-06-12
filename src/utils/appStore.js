import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // Define your reducers/slices here
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;