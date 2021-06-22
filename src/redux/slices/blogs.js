import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "blogs",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_ALL_BLOGS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_ALL_BLOGS } = slice.actions;
export default slice.reducer;
