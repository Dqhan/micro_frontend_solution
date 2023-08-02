import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  primaryTheme: 'NORMAL',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.primaryTheme = action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;