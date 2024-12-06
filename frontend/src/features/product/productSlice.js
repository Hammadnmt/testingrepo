/* eslint-disable no-unused-vars */
import { baseApi } from "../baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "product/",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        console.log(response);
        return response.data;
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response, meta, arg) => response.data,
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `product/${id}`,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => response.data.data,
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `product/${id}`,
        method: "PATCH",
        body: data,
      }),
      transformResponse: (response, meta, arg) => response.data,
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: "product/",
        method: "POST",
        body: data,
      }),
      transformResponse: (response, meta, arg) => {
        console.log(response.data);
        return response.data;
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useCreateProductMutation,
} = productApi;
