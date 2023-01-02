import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import imageSlice from './imageSlice';
import typeSlice from './typeSlice';

const store = configureStore({
  reducer: {
    form: formSlice,
    image: imageSlice,
    type: typeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
