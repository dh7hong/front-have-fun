import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../modules/Image";


export const store = configureStore({
  reducer : {
    image : imageSlice,
    
  }
})