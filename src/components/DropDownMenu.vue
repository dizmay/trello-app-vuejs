<template>
  <div class="dropdown__container">
    <div
      class="dropdown__item"
      v-for="item of menuItems"
      :key="item.name"
      @click="
        $emit('menuItemClicked');
        item.func?.() || null;
      "
    >
      <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: "Boards",
          path: "/boards",
        },
        {
          name: "Notifications",
          path: "/",
        },
        {
          name: "Logout",
          path: "/",
          func: this.logout,
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  &__container {
    position: absolute;
    top: 4.5vh;
    right: 0.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.5rem;
    background-color: #000;
    border-radius: 1rem;
  }

  &__item {
    margin: 0.25rem 0;
  }
}
</style>
