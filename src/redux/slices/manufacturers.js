import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "manufacturers",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_ALL_MANUFACTURERS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_ALL_MANUFACTURERS } = slice.actions;
export default slice.reducer;
