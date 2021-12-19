<template>
  <div class="comment">
    <div class="comment__avatar">
      <Avatar :username="user" />
    </div>
    <div class="comment__body">
      <span class="comment__user">{{ user }}: </span>
      <span class="comment__message">{{ message }}</span>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/app/Avatar.vue";

export default {
  props: {
    user: String,
    message: String,
  },
  components: {
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid #ccc;
  padding-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  &__avatar {
    margin-right: 0.5rem;
  }

  &__body {
    display: flex;
    flex-direction: column;
  }
}
</style>
