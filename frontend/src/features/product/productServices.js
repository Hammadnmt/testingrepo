/* eslint-disable no-unused-vars */
import axios from "axios";

const basePath = "/api/product";

// Sign in function
async function getProducts() {
  try {
    return await axios.get(basePath + "/"); // Return response data for the successful login
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
    return await axios.get(`${basePath}/${product_id}`); // Return response data after successful registration
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "operation failed!"
    );
  }
}
async function createNewProduct(productData) {
  try {
    return await axios.post(basePath + "/", productData);
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "Registration failed!"
    );
  }
}
async function deleteProductByid(product_id) {
  try {
    return await axios.delete(`${basePath}/${product_id}`); // Return response data after successful registration
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "operation failed!"
    );
  }
}
async function updateProductByid(data) {
  try {
    return await axios.patch(`${basePath}/${data.id}`, {
      name: data.name,
      quantity: data.quantity,
    }); // Return response data after successful registration
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "operation failed!"
    );
  }
}

const authServices = {
  updateProductByid,
  createNewProduct,
  deleteProductByid,
  getProducts,
  getProductById,
};

export default authServices;
