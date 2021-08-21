import axios from "axios";
import { baseURL } from "../../config/config";
import { GET_ALL_PACKAGES } from "../slices/packages";

// get all packages
export const getAllPackages = token => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const res = await axios.get(`${baseURL}/api/package/get-all`, config);
    dispatch(GET_ALL_PACKAGES(res.data));
  } catch (err) {
    console.error("Internal Sever Error");
  }
};
