import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "advertisement",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_SINGLE_ADVERTISEMENT: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_SINGLE_ADVERTISEMENT } = slice.actions;
export default slice.reducer;
