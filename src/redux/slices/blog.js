import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "blog",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_SINGLE_BLOG: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_SINGLE_BLOG } = slice.actions;
export default slice.reducer;
