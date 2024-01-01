import { authKey } from "@/constants/storageKeys";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { jwtDecode } from "jwt-decode";

const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) return jwtDecode(authToken);
  else return "";
};

export { storeUserInfo, getUserInfo };
