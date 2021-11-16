<template>
  <div class="modal__container">
    <h1 class="modal__title">
      {{ isRegistration ? "Registration" : "Login" }}
    </h1>
    <form class="modal__form" @submit.prevent="$emit('handleSubmit', authData)">
      <input
        v-model.trim="email"
        type="email"
        name="email"
        placeholder="Enter your email..."
      />
      <input
        v-model.trim="username"
        v-if="isRegistration"
        type="text"
        name="username"
        placeholder="Enter your username..."
      />
      <input
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="Enter your password..."
      />
      <custom-btn light text="Submit" type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  props: {
    isRegistration: {
      type: Boolean,
    },
  },
  computed: {
    authData() {
      return {
        email: this.email,
        username: this.username,
        password: this.password,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &__container {
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #1e1e1e;
    border-radius: 1rem;
  }

  &__title {
    color: #fff;
    font-size: 2.5rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
      width: 60%;
      font-size: 1.5rem;
      color: #fff;
      background-color: inherit;
      padding: 0.1rem 0.2rem;
      margin-bottom: 1.5rem;
      border: none;
      border-bottom: 0.25rem solid #8e8e8e;
      outline: none;

      &:focus {
        border-bottom: 0.25rem solid #fff;
      }
    }
  }
}
</style>
