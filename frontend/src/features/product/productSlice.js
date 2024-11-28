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

export const getAllproducts = createAsyncThunk("product/", async (thunkApi) => {
  try {
    return await productServices.getProducts(); // Call to auth service for registration
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getProduct = createAsyncThunk("product/", async (id, thunkApi) => {
  try {
    return await productServices.getProductById(id); // Call to auth service for registration
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      // Reset state
      reset: (state) => {
        state.products=[], // Get user from localStorage
        state.isLoading=false,
        state.isError=false,
        state.isSuccess= false,
        state.message=""
      },
    },
    extraReducers: (builder) => {
      // Handle signup
      builder
        .addCase(getAllproducts.pending, (state) => {
            state.isLoading=true,
            state.isError=false,
            state.isSuccess= false
        })
        .addCase(getAllproducts.fulfilled, (state, action) => {
          state.products = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        })
        .addCase(getAllproducts.rejected, (state, action) => {
          state.products = null;
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload; // Set error message
        })
        // Handle login
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
        });
    },
  });
  
  export const { reset } = productSlice.actions;
  
  export default productSlice.reducer;
