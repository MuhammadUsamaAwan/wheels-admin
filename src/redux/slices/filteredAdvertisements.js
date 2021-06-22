import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "FilteredAdvertisements",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_FILTERED_ADVERTISEMENTS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_FILTERED_ADVERTISEMENTS } = slice.actions;
export default slice.reducer;
