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
      this.$store.dispatch("register", userData).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
