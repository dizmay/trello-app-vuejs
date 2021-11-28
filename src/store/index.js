import { createStore } from "vuex";
import auth from "./auth";
import boards from "./boards";

export default createStore({
  state: {
    isLoading: false,
    error: "",
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value;
    },
    setError(state, message) {
      state.error = message;
    },
    clearError(state) {
      state.error = "";
    },
  },
  modules: { auth, boards },
  actions: {},
  getters: {
    isLoading: (state) => state.isLoading,
    error: (state) => state.error,
  },
});
