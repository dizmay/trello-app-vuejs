<template>
  <Header />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/app/Header.vue";

export default {
  components: { Header },
};
</script>

<style lang="scss" scoped>
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