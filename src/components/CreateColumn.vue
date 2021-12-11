<template>
  <div class="column">
    <div class="column__title">Create column</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.column {
  width: 12vw;
  padding: 0.5rem;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.25s ease-in;
  }

  &__title {
    color: #fff;
    text-align: center;
  }
}
</style>
