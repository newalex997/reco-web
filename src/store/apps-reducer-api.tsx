import { createApi } from "@reduxjs/toolkit/query/react";
import { AppDetailedType, AppListItemType } from "../types/app.type";
import customFetchBaseQuery from "./custom-fetch";

export const appsApi = createApi({
  reducerPath: "appsApi",
  baseQuery: customFetchBaseQuery(),
  endpoints: (builder) => ({
    getAllApps: builder.query<AppListItemType[], void>({
      query: () => `/apps`,
    }),
    getAppById: builder.query<AppDetailedType, string>({
      query: (appId) => `/apps/${appId}`,
    }),
  }),
});

export const { useGetAllAppsQuery, useGetAppByIdQuery } = appsApi;
