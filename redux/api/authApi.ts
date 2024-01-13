import baseApi from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    signIn: mutation({
      query: (data) => ({
        url: "/auth/signin",
        method: "POST",
        data,
      }),
      invalidatesTags: ["user"],
    }),
    signUp: mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
