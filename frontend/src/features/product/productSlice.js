/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../baseApi";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/product/",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => response.data.data,
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`, // API endpoint for signup
        method: "DELETE",
      }),
      transformResponse: (response, meta, arg) => response.data,
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`, // API endpoint for signup
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => response.data.data,
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product/${id}`, // API endpoint for logout
        method: "PATCH",
        body: data,
      }),
      transformResponse: (response, meta, arg) => response.data,
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: `/product/`, // API endpoint for logout
        method: "POST",
        body: data,
      }),
      transformResponse: (response, meta, arg) => response.data.data,
    }),
  }),
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Reset state
    reset: (state) => {
      state.products = [];
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    setProducts: (state, data) => {
      state.products = data.payload;
    },
  },
  // extraReducers: (builder) => {
  //   // Handle signup
  //   builder
  //     .addCase(getAllproducts.pending, (state) => {
  //       (state.isLoading = true),
  //         (state.isError = false),
  //         (state.isSuccess = false);
  //     })
  //     .addCase(getAllproducts.fulfilled, (state, action) => {
  //       state.products = action.payload;
  //       state.isLoading = false;
  //       state.isError = false;
  //       state.isSuccess = true;
  //     })
  //     .addCase(getAllproducts.rejected, (state, action) => {
  //       state.products = [];
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.isSuccess = false;
  //       state.message = action.payload; // Set error message
  //     })
  //     .addCase(getProduct.pending, (state) => {
  //       state.isLoading = true;
  //       state.isError = false;
  //       state.isSuccess = false;
  //     })
  //     .addCase(getProduct.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.products = action.payload;
  //       state.isError = false;
  //       state.isSuccess = true;
  //     })
  //     .addCase(getProduct.rejected, (state, action) => {
  //       state.products = [];
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.isSuccess = false;
  //       state.message = action.payload; // Set error message for login
  //     })
  //     .addCase(createProduct.pending, (state) => {
  //       state.isLoading = true;
  //       state.isError = false;
  //       state.isSuccess = false;
  //     })
  //     .addCase(createProduct.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.products = action.payload;
  //       state.isError = false;
  //       state.isSuccess = true;
  //     })
  //     .addCase(createProduct.rejected, (state, action) => {
  //       state.products = [];
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.isSuccess = false;
  //       state.message = action.payload; // Set error message for login
  //     })
  //     .addCase(updateProduct.pending, (state) => {
  //       state.isLoading = true;
  //       state.isError = false;
  //       state.isSuccess = false;
  //     })
  //     .addCase(updateProduct.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.message = action.payload;
  //       state.isError = false;
  //       state.isSuccess = true;
  //     })
  //     .addCase(updateProduct.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.isSuccess = false;
  //       state.message = action.payload;
  //       console.log(state.message);
  //     })
  //     .addCase(deleteProduct.pending, (state) => {
  //       state.isLoading = true;
  //       state.isError = false;
  //       state.isSuccess = false;
  //     })
  //     .addCase(deleteProduct.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.message = action.payload;
  //       state.isError = false;
  //       state.isSuccess = true;
  //     })
  //     .addCase(deleteProduct.rejected, (state, action) => {
  //       state.products = [];
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.isSuccess = false;
  //       state.message = action.payload; // Set error message for login
  //     });
  // },
});

export const { reset, setProducts } = productSlice.actions;
export const {
  useGetAllProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useCreateProductMutation,
} = productApi;
export default productSlice.reducer;
