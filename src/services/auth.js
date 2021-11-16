import axios from "axios";

class AuthService {
  login(user) {
    return axios.post(process.env.baseURL + "signin", user);
  }

  register(user) {
    return axios.post(process.env.baseURL + "signup", user);
  }

  verify() {
    return axios.get(process.env.baseURL + "verify");
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
