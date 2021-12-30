<template>
  <div
    :id="id"
    class="column"
    draggable="true"
    @dragstart.stop="dragStart"
    @dragover.prevent=""
    @dragend.stop.prevent="dragEnd"
    @dragenter.stop.prevent="dragEnter"
    @dragleave.stop.prevent="dragLeave"
    @drop.stop.prevent="drop"
  >
    <div class="column__heading">
      <div class="column__title">{{ title }}</div>
      <div class="column__actions">
        <div>
          <icon-btn :handleClick="openModal" icon="pen" />
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
        :columnId="id"
        :id="card.id"
        :columnTitle="title"
        :comments="card.comments"
        :cardDragId="cardDragId"
        :updateCardDragId="updateCardDragId"
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
  <custom-modal
    v-if="isModalOpen"
    header="Update column"
    label="New column title:"
    submitText="Update"
    :isOpen="isModalOpen"
    :closeModal="closeModal"
    :handleSubmit="updateColumn"
  />
</template>

<script>
import ModalMixin from "@/mixins/modal";
import EditModeMixin from "@/mixins/editMode";
import Card from "@/components/Card.vue";
import CardCreate from "@/components/CardCreate.vue";

export default {
  mixins: [ModalMixin, EditModeMixin],
  methods: {
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
    createCard(title, description) {
      this.$store.dispatch("createCard", {
        title,
        description,
        columnId: this.id,
        boardId: this.boardId,
      });
      this.disableEditMode();
    },
    dragStart(event) {
      event.dataTransfer.setData("columnId", event.currentTarget.id);
      event.currentTarget.style.opacity = "0.4";
    },
    dragEnd(event) {
      event.currentTarget.style.opacity = "1.0";
    },
    dragEnter(event) {
      event.currentTarget.style.border = "0.25rem solid #fff";
    },
    dragLeave(event) {
      event.currentTarget.style.border = "1px solid #fff";
    },
    drop(event) {
      const dragId = Number(event.dataTransfer.getData("columnId"));
      const dropId = Number(event.currentTarget.id);
      console.log("drag: ", dragId, "drop: ", dropId);
      if (this.cardDragId !== null) {
        this.$store.dispatch("moveCard", {
          dragId: Number(this.cardDragId),
          dropId,
          dragColumnId: dragId,
          dropColumnId: dropId,
          side: "empty",
          boardId: this.boardId,
        });
        return;
      }
      if (dragId !== dropId) {
        this.$store.dispatch("moveColumn", {
          dragId,
          dropId,
          boardId: this.boardId,
        });
      }
      event.currentTarget.style.border = "1px solid #fff";
    },
  },
  props: {
    title: String,
    id: Number,
    boardId: String,
    cards: Array,
    cardDragId: String,
    updateCardDragId: Function,
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
  cursor: grab;

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
