
export default {
  login,
  logout,
  get isLoggedIn() {
    return localStorage.getItem("currentUser") ? true : false;
  },
};

function login(username, password) {
  if (username == 'admin' && password == 'admin') {
    let jwt = "fake-token";
    let user = { username, password, jwt };
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  }
  return null
}

function logout() {
  localStorage.removeItem("currentUser");
}
