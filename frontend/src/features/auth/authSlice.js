/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../baseApi";

// Initial state
const initialState = {
  user: localStorage.getItem("user") || null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login", // API endpoint for login
        method: "POST", // POST method for sending data
        body: credentials, // Send user credentials
      }),
      transformResponse: (response, meta, arg) => {
        localStorage.setItem("user", JSON.stringify(response));
        return response;
      },
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    registerUser: builder.mutation({
      query: (userdata) => ({
        url: "/auth/signup",
        method: "POST",
        body: userdata,
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reset state
    reset: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    setUser: (state, data) => {
      state.user = data.payload;
      // console.log(state.user);
    },
  },
});

export const { reset, setUser } = authSlice.actions;
export default authSlice.reducer;
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
