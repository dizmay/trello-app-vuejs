<template>
  <div class="boards__container">
    <h2 class="boards__header">My Boards</h2>
    <div class="boards__create">
      <div>
        <custom-btn dark text="Create board" :handleClick="openModal" />
      </div>
    </div>
    <div class="boards__grid" v-if="boards.length">
      <div class="board" v-for="board in boards" :key="board.id">
        <div class="board__remove">
          <icon-btn icon="trash" :handleClick="removeBoard(board.id)" />
        </div>
        <router-link :to="{ name: 'Board', params: { id: board.id } }">
          <span>{{ board.title }}</span>
        </router-link>
      </div>
    </div>
    <h3 class="boards__empty" v-else>You don't have any boards. Create one!</h3>
  </div>
  <custom-modal
    v-if="isModalOpen"
    header="New board"
    label="Board title:"
    submitText="Create"
    :isOpen="isModalOpen"
    :closeModal="closeModal"
    :handleSubmit="createBoard"
  />
</template>

<script>
import ModalMixin from "@/mixins/modal";

export default {
  mixins: [ModalMixin],
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
      return () => {
        this.$store.dispatch("removeBoard", id);
      };
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
      position: relative;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__remove {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;

        .icon-btn {
          color: #000;
        }
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
