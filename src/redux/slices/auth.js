import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem('token'),
    admin: localStorage.getItem('admin'),
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
  },
  reducers: {
    LOGIN: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    },
    LOGIN_REMEMBER: (state, action) => {
      localStorage.setItem("user", action.payload.user);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isLoggedIn", true);
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    },
  },
});

export const { LOGIN, LOGIN_REMEMBER } = slice.actions;
export default slice.reducer;