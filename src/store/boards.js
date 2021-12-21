import boardsService from "@/services/boards";

export default {
  state: {
    boards: [],
    boardUsers: [],
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
    async getBoardUsers({ commit }, boardId) {
      try {
        commit("setIsLoading", true);
        const boardUsers = await boardsService.getBoardUsers(boardId);
        commit("setBoardUsers", boardUsers.data);
      } catch (error) {
        console.log("boards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async inviteUserToBoard({ commit, getters }, { boardId, username }) {
      try {
        commit("setIsLoading", true);
        const userId = getters.userData.id;
        const payload = {
          username,
          userId,
          boardId,
        };
        await boardsService.inviteUserToBoard(payload);
      } catch (error) {
        console.log("boards error: ", error);
        commit("setError", error.response.data.message);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  mutations: {
    setBoards(state, boards) {
      state.boards = boards;
    },
    setBoardUsers(state, boardUsers) {
      state.boardUsers = boardUsers;
    },
  },
  getters: {
    boards: (state) => state.boards,
    currentBoard: (state) => (boardId) => {
      return state.boards.find((board) => board.id === boardId);
    },
    boardUsers: (state) => state.boardUsers,
  },
};
