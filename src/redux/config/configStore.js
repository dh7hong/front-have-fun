import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../modules/Image";
import countSlice from "../modules/Count";

export const store = configureStore({
  reducer: {
    image: imageSlice,
    count: countSlice,
  },
});
