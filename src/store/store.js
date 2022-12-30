import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import imageSlice from './imageSlice';

const store = configureStore({
  reducer: {
    form: formSlice,
    image: imageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
