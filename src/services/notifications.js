import axios from "axios";

class NotificationsService {
  getNotifications() {
    return axios.get(process.env.VUE_APP_BASE_URL + "invite-board");
  }

  replyToNotification({ invId, isAccepted }) {
    return axios.post(process.env.VUE_APP_BASE_URL + "invite-board/reply", {
      invId,
      isAccepted,
    });
  }
}

export default new NotificationsService();
