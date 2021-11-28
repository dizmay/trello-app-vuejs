import boardsService from "@/services/boards";

export default {
  state: {
    boards: [],
  },
  actions: {
    async getBoards({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await boardsService.getBoards();
        commit("setBoards", response.data);
      } catch (error) {
        console.log("boards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async removeBoard({ commit, dispatch }, id) {
      try {
        commit("setIsLoading", true);
        await boardsService.removeBoard(id);
        dispatch("getBoards");
      } catch (error) {
        console.log("boards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async createBoard({ commit, dispatch, getters }, title) {
      try {
        commit("setIsLoading", true);
        const userId = getters.userData.id;
        await boardsService.createBoard({ userId, title });
        dispatch("getBoards");
      } catch (error) {
        console.log("boards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  mutations: {
    setBoards(state, boards) {
      state.boards = boards;
    },
  },
  getters: {
    boards: (state) => state.boards,
  },
};
