import { combineReducers } from "redux";
import advertisement from "./slices/advertisement";
import advertisements from "./slices/advertisements";
import auth from "./slices/auth";
import blog from "./slices/blog";
import blogs from "./slices/blogs";
import users from "./slices/users";
import filteredAdvertisements from "./slices/filteredAdvertisements";
import manufacturers from "./slices/manufacturers";
import packages from "./slices/packages";
import img from "./slices/img";

export default combineReducers({
  advertisement,
  advertisements,
  auth,
  blog,
  blogs,
  filteredAdvertisements,
  manufacturers,
  img,
  users,
  packages,
});
