import { createSlice } from '@reduxjs/toolkit';
import {
  addGoods,
  getAllGoods,
  getGoodById,
  editGood,
  deleteGood,
} from './operations';

const initialState = {
  goods: [],
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

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllGoods.pending, handlePending)
      .addCase(getAllGoods.fulfilled, (state, action) => {
        state.goods = action.payload;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(getAllGoods.rejected, handleRejected)

      .addCase(addGoods.pending, handlePending)
      .addCase(addGoods.fulfilled, (state, action) => {
        state.goods = [...state.goods, action.payload];
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(addGoods.rejected, handleRejected)

      .addCase(getGoodById.pending, handlePending)
      .addCase(getGoodById.fulfilled, (state, action) => {
        state.goods = state.goods.filter(
          good => good._id === action.payload.id
        );
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(getGoodById.rejected, handleRejected)
      .addCase(editGood.pending, handlePending)
      .addCase(editGood.fulfilled, (state, action) => {
        const index = state.goods.findIndex(
          good => good._id === action.payload._id
        );
        state.goods.splice(index, 1, action.payload);
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(editGood.rejected, handleRejected)
      .addCase(deleteGood.pending, handlePending)
      .addCase(deleteGood.fulfilled, (state, action) => {
        state.goods = state.goods.filter(good => good._id !== action.payload);
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(deleteGood.rejected, handleRejected);
  },
});

export const goodsReducer = goodsSlice.reducer;
