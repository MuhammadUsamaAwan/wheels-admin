import axios from "axios";
import { baseURL } from "../../config/config";
import { GET_ALL_MANUFACTURERS } from "../slices/manufacturers";
import { GET_MANUFACTURER } from "../slices/manufacturer";

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

// get single manufacturers
export const getManufacturer = (token, manufacturerId) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const body = JSON.stringify({ manufacturerId });
  try {
    const res = await axios.post(
      `${baseURL}/admin/get-single-manufacturer`,
      config,
      manufacturerId
    );
    dispatch(GET_MANUFACTURER(res.data));
  } catch (err) {
    console.error(err);
  }
};
