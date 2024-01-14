import baseApi from "./baseApi";

const appointmentApi = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    bookAnAppointment: mutation({
      query: (data) => ({
        url: "/appointments",
        method: "POST",
        data,
      }),
      invalidatesTags: ["appointments"],
    }),
  }),
});

export const { useBookAnAppointmentMutation } = appointmentApi;
