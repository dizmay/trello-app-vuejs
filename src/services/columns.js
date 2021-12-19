import axios from "axios";

class ColumnsService {
  getColumns(boardId) {
    return axios.get(process.env.VUE_APP_BASE_URL + "board-columns", {
      params: { boardId },
    });
  }

  createColumn(boardData) {
    return axios.post(
      process.env.VUE_APP_BASE_URL + "board-columns",
      boardData
    );
  }

  removeColumn({ boardId, columnId }) {
    return axios.delete(process.env.VUE_APP_BASE_URL + "board-columns", {
      params: { boardId, columnId },
    });
  }

  updateColumn(columnData) {
    return axios.put(
      process.env.VUE_APP_BASE_URL + "board-columns",
      columnData
    );
  }

  moveColumn({ dragId, dropId, boardId }) {
    return axios.put(
      process.env.VUE_APP_BASE_URL + "board-columns/move-column",
      { dragId, dropId, boardId }
    );
  }
}

export default new ColumnsService();
