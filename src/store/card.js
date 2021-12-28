import cardService from "@/services/card.js";

export default {
  actions: {
    async createCard(
      { commit, dispatch },
      { title, description, columnId, boardId }
    ) {
      try {
        commit("setIsLoading", true);
        await cardService.createCard({ title, description, columnId, boardId });
        dispatch("getColumns", boardId);
      } catch (error) {
        console.log("cards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async updateCard(
      { commit, dispatch },
      { id, title, description, boardId }
    ) {
      try {
        commit("setIsLoading", true);
        await cardService.updateCard({ id, title, description });
        dispatch("getColumns", boardId);
      } catch (error) {
        console.log("cards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async removeCard({ commit, dispatch }, { id, columnId, boardId }) {
      try {
        commit("setIsLoading", true);
        await cardService.removeCard({ id, columnId });
        dispatch("getColumns", boardId);
      } catch (error) {
        console.log("cards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async assignUserToCard(
      { commit, dispatch },
      { taskId, userId, boardId, columnId }
    ) {
      try {
        commit("setIsLoading", true);
        await cardService.assignUserToCard({
          taskId,
          userId,
          boardId,
          columnId,
        });
        dispatch("getColumns", boardId);
      } catch (error) {
        console.log("cards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async cancelUserAssignment(
      { commit, dispatch },
      { taskId, userId, boardId }
    ) {
      try {
        commit("setIsLoading", true);
        await cardService.cancelUserAssignment({ taskId, userId, boardId });
        dispatch("getColumns", boardId);
      } catch (error) {
        console.log("cards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async moveCard(
      { commit, dispatch },
      { dragId, dropId, dragColumnId, dropColumnId, side, boardId }
    ) {
      try {
        commit("setIsLoading", true);
        await cardService.moveCard({
          dragId,
          dropId,
          dragColumnId,
          dropColumnId,
          side,
        });
        dispatch("getColumns", boardId);
      } catch (error) {
        console.log("cards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async createComment(
      { commit, dispatch, getters },
      { text, taskId, boardId, columnId }
    ) {
      try {
        commit("setIsLoading", true);
        await cardService.createComment({
          text,
          userId: getters.userData.id,
          taskId,
          boardId,
          columnId,
        });
        dispatch("getColumns", boardId);
      } catch (error) {
        console.log("cards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
};
