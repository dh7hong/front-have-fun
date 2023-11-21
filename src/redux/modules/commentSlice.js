import { createSlice } from '@reduxjs/toolkit';

let nextCommentId = 1;

const initialState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: {
      reducer: (state, action) => {
        state.comments.push(action.payload);
      },
      prepare: (postId, username, contents) => ({
        payload: {
          commentId: nextCommentId++,
          postId,
          username,
          contents
        }
      }),
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
