import axiosBaseQuery from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: ["user"],
});
