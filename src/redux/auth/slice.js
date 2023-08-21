import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  login,
  logout,
  refreshUser,
  addToCart,
  deleteFromCart,
  clearCart,
} from './operations';
import { toast } from 'react-toastify';

const initialState = {
  user: {
    _id: null,
    name: null,
    email: null,
    phone: null,
    role: null,
    goodsInCart: [],
  },
  accessToken: null,
  refreshToken: null,

  isLoggedIn: false,
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(signup.rejected, handleRejected)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload.message || false;
        toast.error(action.payload.message);
      })

      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, (state, action) => {
        state.user = {
          _id: null,
          name: null,
          email: null,
          phone: null,
          role: null,
          goodsInCart: [],
        };
        state.accessToken = null;
        state.refreshToken = null;

        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(logout.rejected, handleRejected)

      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(refreshUser.rejected, handleRejected)
      .addCase(addToCart.pending, handlePending)
      .addCase(addToCart.fulfilled, (state, action) => {
        state.user.goodsInCart = [...state.user.goodsInCart, action.payload];
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(addToCart.rejected, handleRejected)
      .addCase(deleteFromCart.pending, handlePending)
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.user.goodsInCart = state.user.goodsInCart.filter(
          item => item !== action.payload
        );
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(deleteFromCart.rejected, handleRejected)
      .addCase(clearCart.pending, handlePending)
      .addCase(clearCart.fulfilled, (state, action) => {
        state.user.goodsInCart = [];
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(clearCart.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
