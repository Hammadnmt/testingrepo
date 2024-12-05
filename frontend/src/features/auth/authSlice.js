/* eslint-disable no-unused-vars */
import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response, meta, arg) => {
        localStorage.setItem("user", JSON.stringify(response));
        return response;
      },
      transformErrorResponse: (response, meta, arg) => response.error,
    }),
    registerUser: builder.mutation({
      query: (userdata) => ({
        url: "/auth/signup",
        method: "POST",
        body: userdata,
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.error,
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
