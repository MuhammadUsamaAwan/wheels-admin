import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: {
    isLoading: true,
    result: [],
  },
  reducers: {
    GET_ALL_USERS: (state, action) => {
      return {
        result: action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_ALL_USERS } = slice.actions;
export default slice.reducer;
