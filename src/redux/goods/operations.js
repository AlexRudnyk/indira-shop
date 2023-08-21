import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://indira-backend.vercel.app';
// axios.defaults.baseURL = 'http://localhost:3030';

export const getAllGoods = createAsyncThunk(
  'goods/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/goods/getgoods');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getGoodById = createAsyncThunk(
  'goods/getById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/goods/id/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addGoods = createAsyncThunk(
  'goods/addGood',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/goods/addgood', credentials);
      toast.success('Item added successfully');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editGood = createAsyncThunk(
  'goods/editGood',
  async (values, thunkAPI) => {
    try {
      const { data } = await axios.patch('/api/goods/edit', values);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteGood = createAsyncThunk(
  'goods/deleteGood',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/goods/delete/${id}`);
      return data._id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
