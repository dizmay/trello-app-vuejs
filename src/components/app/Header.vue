<template>
  <header class="header">
    <router-link to="/">
      <div class="header__logo">trello.</div>
    </router-link>
    <div class="header__actions">
      <div v-if="isLogged" v-click-outside="closeDropDown">
        <Avatar :username="username" @click.stop="setIsOpen(true)" />
        <DropDownMenu v-if="isOpen" @menuItemClicked="setIsOpen(false)" />
      </div>
      <div v-else>
        <router-link to="/login">
          <custom-btn text="Login" dark />
        </router-link>
        <router-link to="/registration">
          <custom-btn text="Register" light />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import Avatar from "./Avatar.vue";
import DropDownMenu from "@/components/DropDownMenu.vue";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    setIsOpen(isOpen) {
      console.log("test", isOpen);
      this.isOpen = isOpen;
    },
    closeDropDown() {
      if (this.isOpen) {
        this.setIsOpen(false);
      }
    },
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
    username() {
      return this.$store.getters.userData.username;
    },
  },
  components: { Avatar, DropDownMenu },
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
