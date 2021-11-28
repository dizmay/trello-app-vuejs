import axios from "axios";

class BoardsService {
  getBoards() {
    return axios.get(process.env.VUE_APP_BASE_URL + "boards");
  }

  removeBoard(id) {
    return axios.delete(process.env.VUE_APP_BASE_URL + "boards", {
      params: { id },
    });
  }

  createBoard(boardData) {
    return axios.post(process.env.VUE_APP_BASE_URL + "boards", boardData);
  }
}

export default new BoardsService();
