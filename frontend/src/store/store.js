import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import prdReducers from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: prdReducers,
  },
});
