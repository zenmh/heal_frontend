const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") return "";
  else localStorage.setItem(key, token);
};

export { setToLocalStorage };
