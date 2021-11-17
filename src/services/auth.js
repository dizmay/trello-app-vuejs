import axios from "axios";

class AuthService {
  login(user) {
    return axios.post(process.env.VUE_APP_BASE_URL + "signin", user);
  }

  register(user) {
    return axios.post(process.env.VUE_APP_BASE_URL + "signup", user);
  }

  setAuthToken(token) {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }
}

export default new AuthService();
