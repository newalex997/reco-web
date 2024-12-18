// src/services/customFetchBaseQuery.ts

import {
  BaseQueryFn,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const delayPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, 2000);
});

const customFetchBaseQuery =
  (): BaseQueryFn<string, unknown, FetchBaseQueryError> =>
  async (args, api, extraOptions) => {
    let url = "";

    // Custom logic to handle different base URLs or conditions
    if (args.includes("/apps/")) {
      url = "/__mock__/get-app-by-id.json";
    } else if (args === "/apps") {
      url = "/__mock__/get-apps-list.json";
    }

    await delayPromise;

    const result = await fetchBaseQuery({ baseUrl: "" })(
      { url },
      api,
      extraOptions
    );
    return result;
  };

export default customFetchBaseQuery;
