import axios from "axios";

class CardService {
  createCard({ title, description, columnId, boardId }) {
    return axios.post(process.env.VUE_APP_BASE_URL + "columns-tasks", {
      title,
      description,
      columnId,
      boardId,
    });
  }

  removeCard({ id, columnId }) {
    return axios.delete(process.env.VUE_APP_BASE_URL + "columns-tasks", {
      params: { id, columnId },
    });
  }

  updateCard({ id, title, description }) {
    return axios.put(process.env.VUE_APP_BASE_URL + "columns-tasks", {
      id,
      title,
      description,
    });
  }

  assignUserToCard({ taskId, userId, boardId, columnId }) {
    return axios.post(process.env.VUE_APP_BASE_URL + "assign-user", {
      taskId,
      userId,
      boardId,
      columnId,
    });
  }

  cancelUserAssignment({ taskId, userId, boardId }) {
    return axios.delete(process.env.VUE_APP_BASE_URL + "assign-user", {
      params: { taskId, userId, boardId },
    });
  }

  moveCard({ dragId, dropId, dragColumnId, dropColumnId, side }) {
    return axios.put(process.env.VUE_APP_BASE_URL + "columns-tasks/move-card", {
      dragId,
      dropId,
      dragColumnId,
      dropColumnId,
      side,
    });
  }
}

export default new CardService();
