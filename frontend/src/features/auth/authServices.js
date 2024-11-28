/* eslint-disable no-unused-vars */
import axios from "axios";

const basePath = "/api/auth";

// Sign in function
async function signin(userData) {
  try {
    const response = await axios.post(basePath + "/login", userData);
    return response.data; // Return response data for the successful login
  } catch (error) {
    // Throwing a descriptive error to be handled by the Redux action
    throw new Error(
      error.response?.data?.message || error.message || "Login failed!"
    );
  }
}

// Logout function
async function logout() {
  try {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    // Make the logout request
    await axios.post(basePath + "/logout");
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "Logout failed!"
    );
  }
}

// Register function
async function register(userData) {
  try {
    const response = await axios.post(basePath + "/signup", userData);
    return response.data; // Return response data after successful registration
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "Registration failed!"
    );
  }
}

const authServices = {
  signin,
  register,
  logout,
};

export default authServices;
