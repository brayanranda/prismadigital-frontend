import { API_HOST } from "../utils/constant";

export function logoutApi() {
  localStorage.removeItem("TOKEN");
}

export function setTokenApi(token) {
  localStorage.setItem("TOKEN", JSON.stringify(token));
}

export function getTokenApi() {
  return JSON.parse(localStorage.getItem("TOKEN"));
}

export function signInApi(user) {
  const url = `${API_HOST}/login`;
  const data = {
    ...user,
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { message: "User o password incorrectos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function isUserLogedApi() {
  const token = getTokenApi();

  if (!token) {
    logoutApi();
    return null;
  }
  return token;
}
