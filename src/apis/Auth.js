export const setToken = (token) => {
  localStorage.setItem("userToken", token);
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userToken");
  }
  return null;
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem("userToken");
  }
  return null;
};
