<template>
  <button :class="['custom-btn', { 'dark-btn': dark }, { 'light-btn': light }]">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
    },
    light: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-btn {
  border: 0.1rem solid transparent;
  cursor: pointer;
  padding: 0.4rem 1rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight: bold;
}

.dark-btn {
  background-color: #000;
  color: #fff;

  &:hover {
    transition: background-color 0.5s ease-in-out;
    background-color: #fff;
    color: #000;
    border: 0.1rem solid #000;
  }
}

.light-btn {
  background-color: #fff;
  color: #000;

  &:hover {
    transition: background-color 0.5s ease-in-out;
    background-color: #000;
    color: #fff;
    border: 0.1rem solid #fff;
  }
}
</style>