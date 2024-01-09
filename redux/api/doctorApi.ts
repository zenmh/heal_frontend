import baseApi from "./baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getDoctor: query({
      query: (id) => ({
        url: `/doctors/${id}`,
        method: "GET",
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

export const { useGetDoctorQuery, useGetDoctorsQuery } = doctorApi;
