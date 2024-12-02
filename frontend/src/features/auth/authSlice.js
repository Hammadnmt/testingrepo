/* eslint-disable no-unused-vars */
// import { createAsyncThunk } from "@reduxjs/toolkit";
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

// const signup = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     registerUser: builder.query({
//       query: () => "/auth/signup",
//     }),
//   }),
// });

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login", // API endpoint for login
        method: "POST", // POST method for sending data
        body: credentials, // Send user credentials
      }),
      transformResponse: (response, meta, arg) => {
        // console.log("Raw response from API:", response);
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(response));
        return response;
      },
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    registerUser: builder.mutation({
      query: (userdata) => ({
        url: "/auth/signup", // API endpoint for signup
        method: "POST",
        body: userdata, // Send user registration data
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout", // API endpoint for logout
        method: "POST",
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
  }),
});
// Async thunk for signup
// export const signup = createAsyncThunk(
//   "auth/signup",
//   async (user, thunkApi) => {
//     try {
//       return await authServices.register(user); // Call to auth service for registration
//     } catch (error) {
//       // Rejecting with a message if the error occurs
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// Async thunk for login
// export const login = createAsyncThunk(
//   "auth/login", // Fixed action type
//   async (user, thunkApi) => {
//     try {
//       return await authServices.signin(user); // Call to auth service for login
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message); // Rejecting with error message
//     }
//   }
// );

// export const logout = createAsyncThunk("auth/logout", async () => {
//   await authServices.logout(); // Call logout service
// });

//Slice definition
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
//   extraReducers: (builder) => {
//     // Handle signup
//     builder
//       .addCase(signup.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.isSuccess = false;
//       })
//       .addCase(signup.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//       })
//       .addCase(signup.rejected, (state, action) => {
//         state.user = null;
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.payload; // Set error message
//       })
//       // Handle login
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.isSuccess = false;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         localStorage.setItem("user", JSON.stringify(action.payload));
//         state.isLoading = false;
//         state.user = action.payload;
//         state.isError = false;
//         state.isSuccess = true;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.user = null;
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.payload; // Set error message for login
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null;
//       });
//   },
// });

export const { reset, setUser } = authSlice.actions;
export default authSlice.reducer;
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
