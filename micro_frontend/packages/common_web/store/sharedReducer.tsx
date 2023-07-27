import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  sharedState: {},
};

export const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setShared: (state, action: PayloadAction<string>) => {
      state.sharedState = action.payload;
    },
  },
});

export const reduceShared = sharedSlice.reducer;
