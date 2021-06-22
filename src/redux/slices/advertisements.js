import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "advertisements",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_ALL_ADVERTISEMENTS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_ALL_ADVERTISEMENTS } = slice.actions;
export default slice.reducer;
