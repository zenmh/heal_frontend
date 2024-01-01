import { setToLocalStorage } from "@/utils/localStorage";

const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  setToLocalStorage("accessToken", accessToken);
};

export { storeUserInfo };
