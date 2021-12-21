import notificationsService from "@/services/notifications.js";

export default {
  state: {
    notifications: [],
  },
  actions: {
    async getNotifications({ commit }) {
      try {
        commit("setIsLoading", true);
        const { data } = await notificationsService.getNotifications();
        commit("setNotifications", data);
      } catch (error) {
        console.log("cards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async replyToNotification({ commit, dispatch }, { invId, isAccepted }) {
      try {
        commit("setIsLoading", true);
        await notificationsService.replyToNotification({ invId, isAccepted });
        dispatch("getNotifications");
      } catch (error) {
        console.log("cards error: ", error);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  mutations: {
    setNotifications(state, notifications) {
      state.notifications = notifications;
    },
  },
  getters: {
    notifications: (state) => state.notifications,
  },
};
