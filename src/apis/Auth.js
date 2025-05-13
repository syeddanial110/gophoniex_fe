export const setToken = (token) => {
  localStorage.setItem('userToken', token)
}

export const getToken = () => {
  return localStorage.getItem('userToken')
}
