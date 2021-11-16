import jwt from "jsonwebtoken";
import authService from "@/services/auth";

export default {
  state: {
    isLogged: false,
    message: "",
    id: null,
    username: "",
    email: "",
  },
  actions: {
    async login({ commit }, userData) {
      try {
        commit("setIsLoading", true);
        const response = await authService.login(userData);
        const token = response.data.token;
        const user = jwt.decode(token);
        commit("setCurrentUser", user);
        localStorage.setItem("token", token);
        authService.setAuthToken(token);
        commit("setIsLogged", true);
      } catch (error) {
        console.log(error);
        commit("setError", error.response.data.message);
        commit("clearUserData");
        commit("setIsLogged", false);
      } finally {
        commit("setIsLoading", false);
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
