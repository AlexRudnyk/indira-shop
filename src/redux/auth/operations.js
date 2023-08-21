import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://indira-backend.vercel.app';
// axios.defaults.baseURL = 'http://localhost:3030';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/signup', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/login', credentials);
      setAuthHeader(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('/api/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/api/auth/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addToCart = createAsyncThunk(
  'auth/addToCart',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.post(`/api/users/addtocart/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  'auth/deleteFromCart',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/users/deletefromcart/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const clearCart = createAsyncThunk(
  'auth/clearCart',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/users/clearcart');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
