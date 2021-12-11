<template>
  <div class="column">
    <div class="column__heading">
      <div class="column__title">{{ title }}</div>
      <div class="column__actions" v-click-outside="closeModal">
        <button type="button" @click="openModal">
          <font-awesome-icon icon="pen" />
          <custom-modal
            v-if="isModalOpen"
            header="Update column"
            label="New column title:"
            submitText="Update"
            :isOpen="isModalOpen"
            :closeModal="closeModal"
            :handleSubmit="updateColumn"
          />
        </button>
        <button type="button" @click="removeColumn">
          <font-awesome-icon icon="trash" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    removeColumn() {
      this.$store.dispatch("removeColumn", {
        columnId: this.id,
        boardId: this.boardId,
      });
    },
    updateColumn(title) {
      this.$store.dispatch("updateColumn", {
        title,
        columnId: this.id,
        boardId: this.boardId,
      });
      this.closeModal();
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
    },
    boardId: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.column {
  width: 12vw;
  padding: 0.5rem;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 1rem;
  margin-right: 1rem;

  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: #fff;
  }

  &__actions {
    display: flex;

    button {
      background-color: transparent;
      border: none;
      color: #fff;
      cursor: pointer;

      &:first-child {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
