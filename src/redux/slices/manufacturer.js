import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "manufacturer",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_MANUFACTURER: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_MANUFACTURER } = slice.actions;
export default slice.reducer;
