// import axios from "axios";

export default {
  login,
  logout,
  get isLoggedIn() {
    return localStorage.getItem("currentUser") ? true : false;
  },
};

function login(username, pwd) {
  if (username !== "admin" && pwd !== "admin") return false;
  let jwt = "fake-token";
  let user = { username, pwd, jwt };
  localStorage.setItem("currentUser", JSON.stringify(user));
  return user;
}

function logout() {
  localStorage.removeItem("currentUser");
}
