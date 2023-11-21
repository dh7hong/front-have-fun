import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    contents: '',
    username: '',
    id: 0,
    postId: 0,
  },
  isGlobalEditmode: false,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    getComment: (state, action) => {
      state.data = action.payload;
    },
    clearComment: state => {
      state.data = initialState.data;
    },
    globalEditModeToggle: (state, action) => {
      state.isGlobalEditmode = action.payload;
    },
  },
});

export const { getComment, clearComment, globalEditModeToggle } = commentSlice.actions;

export default commentSlice.reducer;
