<template>
  <div class="board__container">
    <h2 class="board__heading">{{ currentBoard.title }}</h2>
    <div class="column__container">
      <BoardColumn
        v-for="column in columns"
        :key="column.id"
        :title="column.title"
        :id="column.id"
        :boardId="boardId"
      />
      <div v-click-outside="closeModal">
        <CreateColumn @click="openModal" />
        <custom-modal
          v-if="isModalOpen"
          header="New column"
          label="Column title:"
          submitText="Create"
          :isOpen="isModalOpen"
          :closeModal="closeModal"
          :handleSubmit="createColumn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BoardColumn from "@/components/BoardColumn.vue";
import CreateColumn from "../components/CreateColumn.vue";

export default {
  data() {
    return {
      isModalOpen: false,
      boardId: this.$route.params.id,
    };
  },
  methods: {
    closeModal() {
      this.isModalOpen = false;
    },
    openModal() {
      this.isModalOpen = true;
    },
    createColumn(title) {
      const boardData = { boardId: this.boardId, title };
      this.$store.dispatch("createColumn", boardData);
      this.closeModal();
    },
  },
  components: {
    BoardColumn,
    CreateColumn,
  },
  computed: {
    columns() {
      return this.$store.getters.columns;
    },
    currentBoard() {
      return (
        this.$store.getters.currentBoard(Number(this.boardId)) ||
        "Loading board title..."
      );
    },
  },
  mounted() {
    if (!this.$store.getters.boards.length) {
      this.$store.dispatch("getBoards");
    }
    this.$store.dispatch("getColumns", this.boardId);
  },
};
</script>

<style lang="scss" scoped>
.board {
  &__container {
    width: 100vw;
    height: 95vh;
    padding: 0 0.5rem;
  }

  &__heading {
    text-align: center;
    color: #fff;
  }
}

.column__container {
  display: flex;
}
</style>