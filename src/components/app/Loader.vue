<template>
  <div class="loader__backdrop" v-if="isLoading">
    <img src="@/assets/svg/loader.svg" alt="Loader" />
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
.loader__backdrop {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.75);

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>