import { authKey } from "@/constants/storageKeys";
import { getFromLocalStorage } from "@/utils/localStorage";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

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

export { instance };
