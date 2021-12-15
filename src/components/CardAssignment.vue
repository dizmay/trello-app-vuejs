<template>
  <div class="assigned-list">
    <div class="assigned-list__item" v-for="user in boardUsers" :key="user.id">
      <Avatar :username="user.username" />
      <icon-btn
        icon="check-circle"
        v-if="isAssigned(user)"
        :handleClick="assignUserToCard(user.id)"
      />
      <icon-btn
        icon="ban"
        v-else
        :handleClick="cancelUserAssignment(user.id)"
      />
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/app/Avatar.vue";

export default {
  props: {
    boardUsers: Array,
    assignedUsers: Array,
    taskId: Number,
    columnId: Number,
    boardId: String,
  },
  methods: {
    isAssigned(user) {
      return !this.assignedUsers.find(
        (assignedUser) => assignedUser.username === user.username
      );
    },
    assignUserToCard(userId) {
      return () => {
        this.$store.dispatch("assignUserToCard", {
          taskId: this.taskId,
          userId,
          boardId: this.boardId,
          columnId: this.columnId,
        });
      };
    },
    cancelUserAssignment(userId) {
      return () => {
        this.$store.dispatch("cancelUserAssignment", {
          taskId: this.taskId,
          userId,
          boardId: this.boardId,
        });
      };
    },
  },
  components: {
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
.assigned-list {
  position: absolute;
  z-index: 1;
  background-color: #000;
  color: #fff;
  border-radius: 1rem;
  border: 0.1rem solid #fff;
  padding: 0.25rem;

  &__item {
    display: flex;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    .avatar {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 0.8rem;
    }
  }
}
</style>
