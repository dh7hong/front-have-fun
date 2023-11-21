import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../modules/Image";
import comments from "../modules/commentsSlice";
import comment from "../modules/commentSlice";

export const store = configureStore({
  reducer : {
    image : imageSlice,
    comments,
    comment
    
  }
})