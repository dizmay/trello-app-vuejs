<template>
  <div class="login__container">
    <AuthModal @handleSubmit="handleLogin" />
  </div>
</template>

<script>
import AuthModal from "@/components/app/AuthModal.vue";

export default {
  components: { AuthModal },
  methods: {
    async handleLogin(userData) {
      delete userData.username;

      try {
        await this.$store.dispatch("login", userData);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login__container {
  width: 100vw;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
