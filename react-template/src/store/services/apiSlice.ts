import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}api/v1/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).appState?.token;
      if (token) headers.set("token", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: () => ({}),
});