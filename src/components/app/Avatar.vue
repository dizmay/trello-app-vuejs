<template>
  <button class="avatar">{{ getFirstLetterInUppercase }}</button>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
    },
  },
  computed: {
    getFirstLetterInUppercase() {
      return this.username[0].toUpperCase();
    },
  },
};
</script>

<style lang="scss">
.avatar {
  background-color: #6ef9bc;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0 solid #60dbc8;
  border-radius: 50%;
  outline: none;
  color: #000;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    transition: background-color 0.5s ease-in-out;
    border: 0.1rem solid #000;
  }
}

@media (max-width: 1280px) {
  .avatar {
    width: 2rem;
    height: 2rem;
  }
}
</style>
