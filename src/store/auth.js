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
        commit("setError", error.response.data.message);
        commit("clearUserData");
        commit("setIsLogged", false);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async register({ commit }, userData) {
      try {
        commit("setIsLoading", true);
        const response = await authService.register(userData);
        const token = response.data.token;
        const user = jwt.decode(token);
        commit("setCurrentUser", user);
        localStorage.setItem("token", token);
        authService.setAuthToken(token);
        commit("setIsLogged", true);
      } catch (error) {
        commit("setError", error.response.data.message);
        commit("clearUserData");
        commit("setIsLogged", false);
      } finally {
        commit("setIsLoading", false);
      }
    },
    checkCurrentUser({ commit }) {
      try {
        commit("setIsLoading", true);
        const token = localStorage.getItem("token");
        if (token) {
          const user = jwt.decode(token);
          commit("setCurrentUser", user);
          authService.setAuthToken(token);
          commit("setIsLogged", true);
        }
      } catch (error) {
        localStorage.removeItem("token");
        commit("clearUserData");
        commit("setIsLogged", false);
      } finally {
        commit("setIsLoading", false);
      }
    },
    logout({ commit }) {
      commit("setIsLoading", true);
      localStorage.removeItem("token");
      commit("clearUserData");
      commit("setIsLogged", false);
      commit("setIsLoading", false);
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
    isLogged: (state) => state.isLogged,
  },
};
