import { authKey } from "@/constants/storageKeys";
import { TGenericErrorResponse, TGenericSuccessResponse } from "@/types/common";
import { getFromLocalStorage } from "@/utils/localStorage";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Handle Request
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);

    if (accessToken) config.headers.Authorization = accessToken;

    return config;
  },
  function (err: any) {
    return Promise.reject(err);
  }
);

// Handle Response
// instance.interceptors.response.use(
//   //@ts-ignore
//   function (response) {
//     const responseObject: TGenericSuccessResponse = {
//       data: response?.data?.data,
//       meta: response?.data?.meta,
//     };

//     return responseObject;
//   },
//   function (err: any) {
//     const responseObject: TGenericErrorResponse = {
//       statusCode: err?.response?.data?.statusCode || 500,
//       message: err?.response?.data?.message || "Something went wront!!",
//       errorMessages: err?.response?.data?.message,
//     };

//     return responseObject;
//   }
// );

export { instance };
