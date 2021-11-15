<template>
  <header class="header">
    <div class="header__logo">trello.</div>
    <div class="header__actions">
      <div v-if="isLogged">
        <Avatar />
      </div>
      <div v-else>
        <custom-btn text="Login" dark />
        <custom-btn text="Register" light />
      </div>
    </div>
  </header>
</template>

<script>
import Avatar from "./Avatar.vue";

export default {
  data() {
    return {
      isLogged: false,
    };
  },
  components: { Avatar },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 5vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00000040;
  padding: 0 1vw;
  color: #fff;

  &__logo {
    font-family: "Akaya Telivigala", cursive;
    font-size: 2.5rem;
    font-style: italic;
    cursor: pointer;
    font-weight: 700;
  }
}
</style>