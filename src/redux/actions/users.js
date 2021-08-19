import axios from "axios";
import { baseURL } from "../../config/config";
import { GET_ALL_USERS } from "../slices/users";

// get all users
export const getAllUsers = token => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const res = await axios.get(`${baseURL}/admin/user`, config);
    dispatch(GET_ALL_USERS(res.data));
  } catch (err) {
    console.error("Internal Sever Error");
  }
};
