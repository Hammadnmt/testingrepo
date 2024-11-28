/* eslint-disable no-unused-vars */
import axios from "axios";

const basePath = "/api/product";

// Sign in function
async function getProducts(userData) {
  try {
    const response = await axios.get(basePath + "/");
    return response.data; // Return response data for the successful login
  } catch (error) {
    // Throwing a descriptive error to be handled by the Redux action
    throw new Error(
      error.response?.data?.message || error.message || "Operation failed!"
    );
  }
}
// Register function
async function getProductById(product_id) {
  try {
    const response = await axios.get(basePath + "/:id", product_id);
    return response.data; // Return response data after successful registration
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "operation failed!"
    );
  }
}

const authServices = {
  getProducts,
  getProductById,
};

export default authServices;
