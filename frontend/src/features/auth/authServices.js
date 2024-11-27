/* eslint-disable no-unused-vars */
import axios from "axios";

const basePath = "/api/auth";

async function signin(userData) {
  try {
    const response = await axios.post(basePath + "/login", userData);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data.accessToken));
    }
  } catch (error) {
    console.log(error);
  }
}
async function logout() {
  localStorage.removeItem("user");
  return axios.post(basePath + "/logout");
}
async function register(userData) {
  try {
    const response = await axios.post(basePath + "/signup", userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const authServices = {
  signin,
  register,
  logout,
};

export default authServices;
