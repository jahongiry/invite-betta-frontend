import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  wedding: true,
  weddingCard: false,
  birthday: true,
  birthdayCard: false,
};

const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    chooseWedding: (state) => {
      state.birthday = false;
      state.wedding = true;
      state.birthdayCard = false;
      state.weddingCard = true;
    },
    chooseBirthday: (state) => {
      state.birthday = true;
      state.wedding = false;
      state.weddingCard = false;
      state.birthdayCard = true;
    },
  },
});

export const { chooseWedding, chooseBirthday } = typeSlice.actions;
export default typeSlice.reducer;
