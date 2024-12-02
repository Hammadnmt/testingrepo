/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productServices from "./productServices";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (productData, thunkApi) => {
    try {
      return await productServices.createNewProduct(productData); // Call to auth service for registration
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAllproducts = createAsyncThunk(
  "product/getAll",
  async (thunkApi) => {
    try {
      return await productServices.getProducts(); // Call to auth service for registration
      // return await response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getById",
  async (id, thunkApi) => {
    try {
      return await productServices.getProductById(id); // Call to auth service for registration
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateById",
  async (data, thunkApi) => {
    try {
      return await productServices.updateProductByid(data); // Call to auth service for registration
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteById",
  async (id, thunkApi) => {
    try {
      return await productServices.deleteProductByid(id); // Call to auth service for registration
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Reset state
    reset: (state) => {
      (state.products = []),
        (state.isLoading = false),
        (state.isError = false),
        (state.isSuccess = false),
        (state.message = "");
    },
  },
  extraReducers: (builder) => {
    // Handle signup
    builder
      .addCase(getAllproducts.pending, (state) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.isSuccess = false);
      })
      .addCase(getAllproducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(getAllproducts.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload; // Set error message
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload; // Set error message for login
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload; // Set error message for login
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        console.log(state.message);
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload; // Set error message for login
      });
  },
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
