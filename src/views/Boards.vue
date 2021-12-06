<template>
  <div class="boards__container">
    <h2 class="boards__header">My Boards</h2>
    <div class="boards__create">
      <div v-click-outside="closeModal">
        <custom-btn dark text="Create board" :handleClick="openModal" />
        <custom-modal
          v-if="isModalOpen"
          header="New board"
          label="Board title:"
          submitText="Create"
          :isOpen="isModalOpen"
          :closeModal="closeModal"
          :handleSubmit="createBoard"
        />
      </div>
    </div>
    <div class="boards__grid" v-if="boards.length">
      <div class="board" v-for="board in boards" :key="board.id">
        <button class="board__remove" @click="removeBoard(board.id)">
          &#10006;
        </button>
        <span>{{ board.title }}</span>
      </div>
    </div>
    <h3 class="boards__empty" v-else>You don't have any boards. Create one!</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  computed: {
    boards() {
      return this.$store.getters.boards;
    },
  },
  mounted() {
    this.$store.dispatch("getBoards");
  },
  methods: {
    removeBoard(id) {
      this.$store.dispatch("removeBoard", id);
    },
    closeModal() {
      if (this.isModalOpen) {
        this.isModalOpen = false;
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
    createBoard(title) {
      this.$store.dispatch("createBoard", title);
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.boards {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  &__header {
    padding-top: 1rem;
    color: #fff;
  }

  &__grid {
    width: 100%;
    height: 100%;
    display: grid;
    gap: 3%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    padding: 0 1rem;

    .board {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &__remove {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        width: 1.25rem;
        height: 1.25rem;
        background-color: red;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  &__create {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 5%;
  }

  &__empty {
    color: #fff;
  }
}
</style>
