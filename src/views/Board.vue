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
        :cards="column.tasks"
      />
      <div>
        <CreateColumn @click="openModal" />
      </div>
    </div>
    <BoardMenu :boardId="boardId" />
  </div>
  <custom-modal
    v-if="isModalOpen"
    header="New column"
    label="Column title:"
    submitText="Create"
    :isOpen="isModalOpen"
    :closeModal="closeModal"
    :handleSubmit="createColumn"
  />
</template>

<script>
import ModalMixin from "@/mixins/modal";
import BoardColumn from "@/components/BoardColumn.vue";
import CreateColumn from "@/components/CreateColumn.vue";
import BoardMenu from "@/components/BoardMenu.vue";

export default {
  mixins: [ModalMixin],
  data() {
    return {
      boardId: this.$route.params.id,
    };
  },
  methods: {
    createColumn(title) {
      const boardData = { boardId: this.boardId, title };
      this.$store.dispatch("createColumn", boardData);
      this.closeModal();
    },
  },
  components: {
    BoardColumn,
    CreateColumn,
    BoardMenu,
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
    this.$store.dispatch("getBoardUsers", this.boardId);
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
    padding: 1rem 0;
  }
}

.column__container {
  display: flex;
  align-items: flex-start;
}
</style>
