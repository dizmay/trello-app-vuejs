<template>
  <div class="column">
    <div class="column__heading">
      <div class="column__title">{{ title }}</div>
      <div class="column__actions" v-click-outside="closeModal">
        <div>
          <icon-btn :handleClick="openModal" icon="pen" />
          <custom-modal
            v-if="isModalOpen"
            header="Update column"
            label="New column title:"
            submitText="Update"
            :isOpen="isModalOpen"
            :closeModal="closeModal"
            :handleSubmit="updateColumn"
          />
        </div>
        <icon-btn :handleClick="removeColumn" icon="trash" />
      </div>
    </div>
    <div class="column__body">
      <Card
        v-for="card in filteredCards"
        :key="card.id"
        :title="card.title"
        :description="card.description"
        :assignedUsers="card.assigned"
        :boardId="boardId"
        :columndId="id"
        :id="card.id"
      />
      <CardCreate
        v-if="isEditMode"
        :disableEditMode="disableEditMode"
        :handleSubmit="createCard"
      />
      <div class="column__card-creation" @click="enableEditMode">
        <icon-btn icon="plus-circle" />
        <span>Create card</span>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CardCreate from "@/components/CardCreate.vue";

export default {
  data() {
    return {
      isModalOpen: false,
      isEditMode: false,
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
    enableEditMode() {
      this.isEditMode = true;
    },
    disableEditMode() {
      this.isEditMode = false;
    },
    createCard(title, description) {
      this.$store.dispatch("createCard", {
        title,
        description,
        columnId: this.id,
        boardId: this.boardId,
      });
      this.disableEditMode();
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
    cards: {
      type: Array,
    },
  },
  components: {
    Card,
    CardCreate,
  },
  computed: {
    filteredCards() {
      return this.cards.filter((card) => card.id !== null);
    },
  },
};
</script>

<style lang="scss" scoped>
.column {
  min-width: 12vw;
  padding: 0.5rem;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 1rem;
  margin-right: 1rem;

  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    border-bottom: 0.25rem solid #fff;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    color: #fff;
  }

  &__actions {
    display: flex;
  }

  &__card-creation {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding-top: 0.5rem;
    border-bottom: 0.1rem solid #fff;
    cursor: pointer;
  }
}
</style>
