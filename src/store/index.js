import { createStore } from "vuex";
import auth from "./auth";
import boards from "./boards";
import columns from "./columns";
import card from "./card";

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
  modules: { auth, boards, columns, card },
  actions: {},
  getters: {
    isLoading: (state) => state.isLoading,
    error: (state) => state.error,
  },
});
