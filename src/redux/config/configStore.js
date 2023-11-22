import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../modules/Image";
import countSlice from "../modules/Count";
import commentSlice from "../modules/commentSlice";
export const store = configureStore({
  reducer: {
    image: imageSlice,
    count: countSlice,
    comments: commentSlice,
  },
});
