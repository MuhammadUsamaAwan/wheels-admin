import axios from "axios";
import { baseURL } from "../config/config";
import { toast } from "react-toastify";

// create blog
export const createBlog = async (token, input) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const body = JSON.stringify({ input });
  try {
    await axios.post(`${baseURL}/blog/create-blogs`, body, config);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

// delete blog
export const deleteBlog = async (token, id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    await axios.post(`${baseURL}/admin/delete-blogs/${id}`, config);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

// create manufacturer
export const createManufacturer = async (token, title, description) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const body = JSON.stringify({ title, description });
  try {
    await axios.post(`${baseURL}/admin/create-manufacturer`, body, config);
    toast.success("Make Created!");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

// create model of manufactutrer
export const createManufacturerModel = async (
  token,
  title,
  description,
  manufacturerId,
  startYear,
  endYear
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const body = JSON.stringify({
    title,
    description,
    manufacturerId,
    startYear,
    endYear,
  });
  try {
    await axios.post(
      `${baseURL}/admin/create-manufacturer-model`,
      body,
      config
    );
    toast.success("Model Created!");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

// post image
export const postImg = async userFile => {
  let formData = new FormData();
  formData.append("userFile", userFile);
  const res = await axios({
    method: "post",
    url: `${baseURL}/upload-file`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

// block an advertisements
export const blockAdvertisement = async (token, advertisementId, reason) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const body = JSON.stringify({ advertisementId, reason });
  toast.success("Advertisement blocked successfully");
  try {
    await axios.post(`${baseURL}/admin/block-advertisement`, body, config);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

// unblock an advertisements
export const unblockAdvertisement = async (token, advertisementId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const body = JSON.stringify({ advertisementId });
  toast.success("Advertisement unblocked successfully");
  try {
    await axios.post(`${baseURL}/admin/unblock-advertisement`, body, config);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

// unblock an advertisements
export const editAdvertisement = async (token, values) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const body = JSON.stringify({ values });
  toast.success("Advertisement updated successfully");
  try {
    await axios.post(`${baseURL}/api/update-advertisment`, body, config);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

//edit user
export const editUser = async (token, values) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const body = JSON.stringify({ values });
  toast.success("User updated successfully");
  try {
    await axios.post(`${baseURL}/admin/update`, body, config);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

//edit manufacturer
export const editManufacturer = async (token, values) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const body = JSON.stringify({ values });
  toast.success("Manufacturer updated successfully");
  try {
    await axios.post(`${baseURL}/admin/update-manufacturer`, body, config);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

//edit model
export const editModel = async (token, values) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const body = JSON.stringify({ values });
  toast.success("Model updated successfully");
  try {
    await axios.post(`${baseURL}/admin/update-model`, body, config);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

//create package
export const createPackage = async (token, values) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  const body = JSON.stringify({ values });
  toast.success("Package created successfully");
  try {
    await axios.post(`${baseURL}/admin/package/create`, body, config);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
