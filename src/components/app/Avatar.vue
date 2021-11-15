<template>
  <div>
    <button class="avatar">{{ getFirstLetterInUppercase() }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Admin",
    };
  },
  methods: {
    getFirstLetterInUppercase() {
      console.log(this.username);
      return this.username[0].toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>