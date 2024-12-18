import { configureStore } from "@reduxjs/toolkit";
import { appsApi } from "./apps-reducer-api";

export const store = configureStore({
  reducer: {
    [appsApi.reducerPath]: appsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appsApi.middleware),
});
