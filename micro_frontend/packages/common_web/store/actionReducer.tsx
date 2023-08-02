import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  action: "TOP",
};

export const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    setAction: (state: any, action: PayloadAction<Record<string, any>>) => {
      state.action = action.payload;
    },
  },
});

export const actionReducer = actionSlice.reducer;
