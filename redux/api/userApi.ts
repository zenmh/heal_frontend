import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getDoctor: query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {} = userApi;
