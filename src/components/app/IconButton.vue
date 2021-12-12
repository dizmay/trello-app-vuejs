<template>
  <button class="icon-btn" type="button" @click="handleClick">
    <font-awesome-icon :icon="icon" />
  </button>
</template>

<script>
export default {
  props: {
    handleClick: {
      type: Function,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-btn {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.1rem 0.25rem;
}
</style>
