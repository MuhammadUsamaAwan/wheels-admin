import axios from "axios";
import { GET_ALL_BLOGS } from "../slices/blogs";
import { GET_SINGLE_BLOG } from "../slices/blog";
import { baseURL } from "../../config/config";

// get all blogs
export const getAllBlogs = (token) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    const res = await axios.get(`${baseURL}/blog/get-all-blogs`, config);
    dispatch(GET_ALL_BLOGS(res.data));
  } catch (err) {
      console.error("Internal Sever Error");
  }
};

// get single blog
export const getSingleBlogs = (token, id) => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    try {
      const res = await axios.get(`${baseURL}/blog/get-single-blogs/${id}`, config);
      dispatch(GET_SINGLE_BLOG(res.data));
    } catch (err) {
        console.error("Internal Sever Error");
    }
  };