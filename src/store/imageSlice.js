import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  image: [],
  error: '',
  data: [],
};

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  return axios.get('http://localhost:3000/image').then((response) => {
    return response.data;
  });
});

const imageSlice = createSlice({
  name: 'image',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.loading = false;
      state.image = action.payload;
    });
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { imageTransfer } = imageSlice.actions;
export default imageSlice.reducer;
