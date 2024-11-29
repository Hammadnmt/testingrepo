/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "./authServices";

// Initial state
const initialState = {
  user: localStorage.getItem("user") || null, // Get user from localStorage
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Async thunk for signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (user, thunkApi) => {
    try {
      return await authServices.register(user); // Call to auth service for registration
    } catch (error) {
      // Rejecting with a message if the error occurs
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login", // Fixed action type
  async (user, thunkApi) => {
    try {
      return await authServices.signin(user); // Call to auth service for login
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // Rejecting with error message
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authServices.logout(); // Call logout service
});

// Slice definition
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
  },
  extraReducers: (builder) => {
    // Handle signup
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload; // Set error message
      })
      // Handle login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload; // Set error message for login
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
