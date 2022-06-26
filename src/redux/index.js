import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
//создали store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
