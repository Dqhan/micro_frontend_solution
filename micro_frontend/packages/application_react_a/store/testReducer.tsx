import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: {},
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload;
    },
  },
});

export const reduceTest = testSlice.reducer;
