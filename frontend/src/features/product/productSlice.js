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
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`, // API endpoint for signup
        method: "DELETE",
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`, // API endpoint for signup
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => response.data.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product/${id}`, // API endpoint for logout
        method: "PATCH",
        body: data,
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: `/product/`, // API endpoint for logout
        method: "POST",
        body: data,
      }),
      transformResponse: (response, meta, arg) => response.data.data,
      transformErrorResponse: (response, meta, arg) => response.status,
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
    }
  }
})
export const { reset, setProducts } = productSlice.actions;
export const { useGetAllProductsQuery, useUpdateProductMutation, useDeleteProductMutation, useCreateProductMutation } = productApi;
export default productSlice.reducer;
