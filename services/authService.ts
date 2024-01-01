import { authKey } from "@/constants/storageKeys";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { jwtDecode } from "jwt-decode";

const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

const getUserInfo = (): string => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) return jwtDecode(authToken);
  else return "";
};

const isLoggedIn = (): boolean => {
  const authToken = getFromLocalStorage(authKey);

  return !!authToken;
};

export { storeUserInfo, getUserInfo, isLoggedIn };
