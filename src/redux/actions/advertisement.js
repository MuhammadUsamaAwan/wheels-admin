import axios from "axios";
import { baseURL } from "../../config/config";
import { GET_ALL_ADVERTISEMENTS } from "../slices/advertisements";
import { GET_SINGLE_ADVERTISEMENT } from "../slices/advertisement";
import { GET_FILTERED_ADVERTISEMENTS } from "../slices/filteredAdvertisements";

// get all advertisements
export const getAllAdvertisements = token => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const res = await axios.get(
      `${baseURL}/admin/get-all-advertisement`,
      config
    );
    dispatch(GET_ALL_ADVERTISEMENTS(res.data));
  } catch (err) {
    console.error("Internal Sever Error");
  }
};

// get single advertisement
export const getSingleAdvertisement =
  (token, advertisementId) => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    const body = JSON.stringify({ advertisementId });
    try {
      const res = await axios.post(
        `${baseURL}/admin/get-single-advertisement`,
        body,
        config
      );
      dispatch(GET_SINGLE_ADVERTISEMENT(res.data));
    } catch (err) {
      console.error("Internal Sever Error");
    }
  };

// get filtered advertisements
export const getFilteredAdvertisements = input => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ input });
  try {
    const res = await axios.post(
      `${baseURL}/admin/get-all-advertisement`,
      body,
      config
    );
    dispatch(GET_FILTERED_ADVERTISEMENTS(res.data));
  } catch (err) {
    console.error("Internal Sever Error");
  }
};
