import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "packages",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_ALL_PACKAGES: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_ALL_PACKAGES } = slice.actions;
export default slice.reducer;
