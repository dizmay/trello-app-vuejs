<template>
  <div class="card">
    <div class="card__actions">
      <icon-btn icon="pen" />
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
        <icon-btn icon="plus-circle" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/app/Avatar.vue";

export default {
  methods: {
    removeCard() {
      this.$store.dispatch("removeCard", {
        id: this.id,
        columnId: this.columndId,
        boardId: this.boardId,
      });
    },
  },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    assignedUsers: {
      type: Array,
    },
    boardId: {
      type: String,
    },
    columndId: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  components: {
    Avatar,
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
}
</style>
