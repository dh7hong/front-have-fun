import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: {
    data: [],
  },
  commentsByPostId: {
    data: [],
  },
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: (state, action) => {
      state.comments.data = action.payload;
    },
    setCommentsByPostId: (state, action) => {
      state.commentsByPostId.data = action.payload;
    },
    addComment: (state, action) => {
      state.commentsByPostId.data.push(action.payload);
    },
    updateComment: (state, action) => {
      const index = state.commentsByPostId.data.findIndex(
        (comment) => comment.id === action.payload.id
      );
      if (index !== -1) {
        state.commentsByPostId.data[index] = action.payload;
      }
    },
    deleteComment: (state, action) => {
      state.commentsByPostId.data = state.commentsByPostId.data.filter(
        (comment) => comment.id !== action.payload
      );
    },
    clearComments: (state) => {
      state.comments = initialState.comments;
      state.commentsByPostId = initialState.commentsByPostId;
    },
  },
});

export const {
  getComments,
  setCommentsByPostId,
  addComment,
  updateComment,
  deleteComment,
  clearComments,
} = commentsSlice.actions;

export default commentsSlice.reducer;

