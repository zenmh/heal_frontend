const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") return "";
  else return localStorage.setItem(key, token);
};

const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") return "";
  else return localStorage.getItem(key);
};

export { setToLocalStorage, getFromLocalStorage };
