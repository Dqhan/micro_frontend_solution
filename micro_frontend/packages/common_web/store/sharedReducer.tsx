import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setShared: (state, action: PayloadAction<Record<string, any>>) => {
      console.log('action.payload', action.payload)
      state = {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const reduceShared = sharedSlice.reducer;
