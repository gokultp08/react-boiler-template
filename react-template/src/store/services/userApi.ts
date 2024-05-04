import { ILoginBody, IUser } from "../../shared/types/interfaces";
import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<
      { user: IUser; token: string },
      ILoginBody | FormData
    >({
      query: (body) => ({
        url: "user/login",
        method: "POST",
        body,
      }),
    }),
    getUser: build.query({
      query: (id) => `post/${id}`,
      providesTags: (_res, _err, id) => [],
    }),
  }),
});

export const { useLoginMutation, useGetUserQuery } = userApi;
