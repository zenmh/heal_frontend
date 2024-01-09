import baseApi from "./baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getDoctor: query({
      query: (id) => ({
        url: "/doctors",
        method: "GET",
        params: { id },
      }),
    }),
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
