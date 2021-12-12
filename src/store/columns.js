import columnsService from "@/services/columns.js";

export default {
  state: {
    columns: [],
  },
  actions: {
    async getColumns({ commit }, boardId) {
      try {
        commit("setIsLoading", true);
        const response = await columnsService.getColumns(boardId);
        commit("setColumns", response.data);
      } catch (error) {
        console.log("columns error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async createColumn({ commit, dispatch }, boardData) {
      try {
        commit("setIsLoading", true);
        await columnsService.createColumn(boardData);
        dispatch("getColumns", boardData.boardId);
      } catch (error) {
        console.log("columns error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async removeColumn({ commit, dispatch }, removeData) {
      try {
        commit("setIsLoading", true);
        await columnsService.removeColumn(removeData);
        dispatch("getColumns", removeData.boardId);
      } catch (error) {
        console.log("columns error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async updateColumn({ commit, dispatch }, { columnId, title, boardId }) {
      try {
        commit("setIsLoading", true);
        await columnsService.updateColumn({ columnId, title });
        dispatch("getColumns", boardId);
      } catch (error) {
        console.log("columns error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  mutations: {
    setColumns(state, columns) {
      state.columns = columns;
    },
  },
  getters: {
    columns: (state) => state.columns,
  },
};
