import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducer/favoriteSlice";

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
