<template>
  <CardCreate
    v-if="isEditMode"
    :disableEditMode="disableEditMode"
    :handleSubmit="updateCard"
    :title="title"
    :description="description"
  />
  <div class="card" v-else @click="openModal">
    <div class="card__actions">
      <icon-btn icon="pen" :handleClick="enableEditMode" />
      <icon-btn icon="trash" :handleClick="removeCard" />
    </div>
    <h4 class="card__title">{{ title }}</h4>
    <span class="card__description">{{ description }}</span>
    <div class="card__assigned-users">
      <span>Assigned users:</span>
      <div class="assigned-users__wrapper">
        <Avatar
          v-for="user in assignedUsers"
          :key="user.id"
          :username="user.username"
        />
        <div class="assigned-users" v-click-outside="disableAssignmentMode">
          <icon-btn icon="plus-circle" :handleClick="enableAssignmentMode" />
          <CardAssignment
            v-if="isAssignmentMode"
            :boardUsers="boardUsers"
            :assignedUsers="assignedUsers"
            :taskId="id"
            :columnId="columnId"
            :boardId="boardId"
          />
        </div>
      </div>
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
  />
</template>

<script>
import ModalMixin from "@/mixins/modal";
import EditMode from "@/mixins/editMode";
import AssignmentMode from "@/mixins/assignmentMode";
import Avatar from "@/components/app/Avatar.vue";
import CardCreate from "@/components/CardCreate.vue";
import CardAssignment from "@/components/CardAssignment.vue";
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
  },
  components: {
    Avatar,
    CardCreate,
    CardAssignment,
    CardModal,
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

  &__assigned-users {
    .assigned-users__wrapper {
      display: flex;
      padding: 0.15rem 0;

      & > * {
        margin-right: 0.15rem;
      }

      & > *:last-child {
        margin-right: 0;
      }
    }

    .avatar {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 0.8rem;
    }
  }

  .assigned-users {
    display: flex;
  }
}
</style>
