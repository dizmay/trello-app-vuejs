<template>
  <div class="auth__container">
    <AuthModal isRegistration @handleSubmit="handleRegister" />
  </div>
</template>

<script>
import AuthModal from "@/components/app/AuthModal.vue";

export default {
  components: {
    AuthModal,
  },
  methods: {
    async handleRegister(userData) {
      try {
        await this.$store.dispatch("register", userData);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
