import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setShared: (state: any, action: PayloadAction<Record<string, any>>) => {
      for (var i in action.payload) {
        state[i] = action.payload[i];
      }
    },
  },
});

export const sharedReducer = sharedSlice.reducer;
