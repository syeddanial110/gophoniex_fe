export const setToken = (token) => {
  localStorage.setItem("userToken", token);
};
export const setUserId = (userId) => {
  localStorage.setItem("userId", userId);
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userToken");
  }
  return null;
};
export const getUserId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userId");
  }
  return null;
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem("userToken");
  }
  return null;
};
