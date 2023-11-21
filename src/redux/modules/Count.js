import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    addCount: (state) => {
      state.count = state.count + 1;
    },
  },
});

export default countSlice.reducer;
export const { addCount } = countSlice.actions;
