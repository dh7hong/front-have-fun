import { createSlice } from '@reduxjs/toolkit';
import useQuery from 'react-query'
let nextCommentId = 1;

const initialState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push({
        commentId: nextCommentId++,
        postId: action.payload.postId,
        username: action.payload.username,
        contents: action.payload.contents
      });
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
