import baseApi from "./baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getDoctors: query({
      query: (data) => ({
        url: "/doctors",
        method: "GET",
        params: data,
      }),
    }),
  }),
});

export const { useGetDoctorsQuery } = doctorApi;
