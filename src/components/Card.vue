<template>
  <CardCreate
    v-if="isEditMode"
    :disableEditMode="disableEditMode"
    :handleSubmit="updateCard"
    :title="title"
    :description="description"
  />
  <div
    class="card"
    v-else
    :id="id"
    :columnId="columnId"
    draggable="true"
    @click="openModal"
    @dragover.prevent=""
    @dragstart.stop="dragStart"
    @dragend.prevent="dragEnd"
  >
    <div
      class="card__top"
      side="top"
      :id="id"
      :columnId="columnId"
      @dragenter.stop.prevent="dragEnter"
      @dragleave.stop.prevent="dragLeave"
      @drop.stop.prevent="drop"
    >
      <div class="card__actions">
        <icon-btn icon="pen" :handleClick="enableEditMode" />
        <icon-btn icon="trash" :handleClick="removeCard" />
      </div>
      <h4 class="card__title">{{ title }}</h4>
      <span class="card__description">{{ description }}</span>
    </div>
    <div
      class="card__assigned-users"
      side="bottom"
      :id="id"
      :columnId="columnId"
      @dragenter.stop.prevent="dragEnter"
      @dragleave.stop.prevent="dragLeave"
      @drop.stop.prevent="drop"
    >
      <UserAssignment
        :assignedUsers="assignedUsers"
        :boardId="boardId"
        :columnId="columnId"
        :taskId="id"
        :boardUsers="boardUsers"
      />
    </div>
  </div>
  <CardModal
    v-if="isModalOpen"
    :title="title"
    :description="description"
    :assignedUsers="assignedUsers"
    :boardId="boardId"
    :columnId="columnId"
    :taskId="id"
    :boardUsers="boardUsers"
    :columnTitle="columnTitle"
    :closeModal="closeModal"
    :comments="comments"
    :removeCard="removeCard"
    :updateCard="updateCard"
  />
</template>

<script>
import ModalMixin from "@/mixins/modal";
import EditMode from "@/mixins/editMode";
import AssignmentMode from "@/mixins/assignmentMode";
import UserAssignment from "@/components/app/UserAssignment.vue";
import CardCreate from "@/components/CardCreate.vue";
import CardModal from "@/components/CardModal.vue";

export default {
  mixins: [ModalMixin, EditMode, AssignmentMode],
  methods: {
    removeCard() {
      this.$store.dispatch("removeCard", {
        id: this.id,
        columnId: this.columnId,
        boardId: this.boardId,
      });
    },
    updateCard(title, description) {
      this.$store.dispatch("updateCard", {
        id: this.id,
        title,
        description,
        boardId: this.boardId,
      });
      this.disableEditMode();
    },
    dragStart(event) {
      this.updateCardDragId(event.currentTarget.id);
      event.dataTransfer.setData("dragId", event.currentTarget.id);
      event.dataTransfer.setData(
        "columnId",
        event.currentTarget.getAttribute("columnId")
      );
      event.currentTarget.style.opacity = "0.4";
    },
    dragEnd(event) {
      event.currentTarget.style.opacity = "1.0";
    },
    dragEnter(event) {
      const dragEnterId = event.currentTarget.id;
      if (dragEnterId === this.cardDragId) return;
    },
    dragLeave() {},
    drop(event) {
      const dropId = JSON.parse(event.currentTarget.id);
      const dragColumnId = JSON.parse(event.dataTransfer.getData("columnId"));
      const dropColumnId = JSON.parse(
        event.currentTarget.getAttribute("columnId")
      );
      const side = event.currentTarget.getAttribute("side");
      this.$store.dispatch("moveCard", {
        dragId: Number(this.cardDragId),
        dropId,
        dragColumnId,
        dropColumnId,
        side,
        boardId: this.boardId,
      });
      this.updateCardDragId(null);
    },
  },
  computed: {
    boardUsers() {
      return this.$store.getters.boardUsers;
    },
  },
  props: {
    title: String,
    description: String,
    assignedUsers: Array,
    boardId: String,
    columnId: Number,
    id: Number,
    columnTitle: String,
    comments: Array,
    cardDragId: String,
    updateCardDragId: Function,
  },
  components: {
    CardCreate,
    CardModal,
    UserAssignment,
  },
};
</script>

<style lang="scss" scoped>
.card {
  color: #fff;
  position: relative;
  width: 100%;
  height: 100%;
  border-top: 0.1rem solid #fff;
  border-bottom: 0.1rem solid #fff;
  padding: 0.5rem 0;
  cursor: grab;
  transition: transform 0.5s ease-in-out;

  &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: none;
  }

  &__actions {
    display: flex;
    position: absolute;
    top: 5%;
    right: 0;
  }

  &__title {
    text-align: center;
    margin: 0.5rem 0;
  }

  &__description {
    font-style: italic;
    color: #ccc;
  }
}
</style>
