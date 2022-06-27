import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import gamesReducer from "./games/reducer";
//создали store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    game: gamesReducer,
  },
});
