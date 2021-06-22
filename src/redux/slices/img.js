import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "img",
  initialState: [],
  reducers: {
    SET_IMG: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { SET_IMG } = slice.actions;
export default slice.reducer;
