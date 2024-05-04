import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import cartReducer from "./slices/CartSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
  },
});

export default store;
