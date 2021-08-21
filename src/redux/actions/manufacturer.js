import axios from "axios";
import { baseURL } from "../../config/config";
import { GET_ALL_MANUFACTURERS } from "../slices/manufacturers";

// get all manufacturers
export const getAllManufacturers = token => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const res = await axios.get(`${baseURL}/admin/get-manufacturer`, config);
    dispatch(GET_ALL_MANUFACTURERS(res.data));
  } catch (err) {
    console.error("Internal Sever Error");
  }
};
