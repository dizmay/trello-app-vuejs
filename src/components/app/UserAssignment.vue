<template>
  <div class="assigned-users">
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
          :taskId="taskId"
          :columnId="columnId"
          :boardId="boardId"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AssignmentMode from "@/mixins/assignmentMode";
import Avatar from "@/components/app/Avatar.vue";
import CardAssignment from "@/components/CardAssignment.vue";

export default {
  mixins: [AssignmentMode],
  props: {
    assignedUsers: Array,
    boardId: String,
    columnId: Number,
    taskId: Number,
    boardUsers: Array,
  },
  components: {
    Avatar,
    CardAssignment,
  },
};
</script>

<style lang="scss" scoped>
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
</style>
