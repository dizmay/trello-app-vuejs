<template>
  <div class="auth__container">
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
      this.$store.dispatch("login", userData);
      this.$router.push("/");
    },
  },
};
</script>
