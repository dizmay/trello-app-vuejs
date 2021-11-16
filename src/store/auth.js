import jwt from "jsonwebtoken";
import authService from "@/services/auth";

export default {
  state: {
    isLogged: false,
    message: "",
    id: null,
    username: "",
    email: "",
    isLoading: false,
  },
  actions: {
    async login({ commit }, userData) {
      try {
        commit("toggleIsLoading");
        const response = await authService.login(userData);
        const token = response.data.token;
        const user = jwt.decode(token);
        commit("setCurrentUser", user);
        localStorage.setItem("token", token);
        authService.setAuthToken(token);
        commit("setIsLogged", true);
      } catch (error) {
        console.log(error, error.message);
        commit("clearUserData");
        commit("setIsLogged", false);
      } finally {
        commit("toggleIsLoading");
      }
    },
  },
  mutations: {
    setIsLogged(state, value) {
      state.isLogged = value;
    },
    setCurrentUser(state, userData) {
      state.id = userData.id;
      state.username = userData.username;
      state.email = userData.email;
    },
    clearUserData(state) {
      state.id = null;
      state.username = "";
      state.email = "";
    },
    toggleIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
  getters: {
    userData(state) {
      return {
        id: state.id,
        email: state.email,
        username: state.username,
      };
    },
  },
};
