import { createSlice } from '@reduxjs/toolkit';
import {
  addComment,
  getComments,
  deleteComment,
  replyComment,
} from './operations';

const initialState = {
  comments: [],

  isRefreshing: false,
  error: false,
};

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload.message || false;
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getComments.pending, handlePending)
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;

        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(getComments.rejected, handleRejected)

      .addCase(addComment.pending, handlePending)
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments = [...state.comments, action.payload];
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(addComment.rejected, handleRejected)

      .addCase(deleteComment.pending, handlePending)
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter(
          comment => comment._id !== action.payload
        );
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(deleteComment.rejected, handleRejected)
      .addCase(replyComment.pending, handlePending)
      .addCase(replyComment.fulfilled, (state, action) => {
        const index = state.comments.findIndex(
          comment => comment._id === action.payload._id
        );
        state.comments.splice(index, 1, action.payload);
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(replyComment.rejected, handleRejected);
  },
});

export const commentsReducer = commentsSlice.reducer;
