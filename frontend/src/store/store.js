import { configureStore } from "@reduxjs/toolkit";
import { baseApi, apiMiddleware } from "../features/baseApi";
import { loggingAndDispatch } from "../middleware/logging";
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(loggingAndDispatch, apiMiddleware),
});
