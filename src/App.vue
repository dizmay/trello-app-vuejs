<template>
  <loader />
  <Header />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/app/Header.vue";

export default {
  components: { Header },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(message) {
      if (message) {
        this.$toast.error(message);
        this.$store.commit("clearError");
      }
    },
  },
  mounted() {
    this.$store.dispatch("checkCurrentUser");
  },
};
</script>

<style lang="scss" scoped>
@import "../public/main.css";

.content {
  width: 100vw;
  height: 100vh;
  padding-top: 5vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
