import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import prdReducers from "../features/product/productSlice";
import { loggingAndDispatch } from "../middleware/logging";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: prdReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disabling the serializable check
    }).concat(loggingAndDispatch), // Apply the customized middleware
});
