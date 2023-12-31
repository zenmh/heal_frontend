import baseApi from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    signIn: mutation({
      query: (data) => ({
        url: "/auth/signin",
        method: "POST",
        data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useSignInMutation } = authApi;
