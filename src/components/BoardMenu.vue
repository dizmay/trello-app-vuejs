<template>
  <div class="board__menu">
    <h3 class="board__menu__heading">Menu</h3>
    <div class="board__menu__action">
      <custom-btn text="Invite user" light :handleClick="openModal" />
    </div>
    <div class="board__menu__info">
      <h4>Board users:</h4>
      <div class="avatars__wrapper">
        <Avatar
          v-for="user in boardUsers"
          :key="user.id"
          :username="user.username"
        />
      </div>
    </div>
  </div>
  <custom-modal
    v-if="isModalOpen"
    header="Invite user"
    label="Username:"
    submitText="Invite"
    :isOpen="isModalOpen"
    :closeModal="closeModal"
    :handleSubmit="inviteUser"
  />
</template>

<script>
import Avatar from "@/components/app/Avatar.vue";

export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    closeModal() {
      this.isModalOpen = false;
    },
    openModal() {
      this.isModalOpen = true;
    },
    inviteUser(username) {
      const inviteData = { boardId: this.boardId, username };
      this.$store.dispatch("inviteUserToBoard", inviteData);
      this.closeModal();
    },
  },
  computed: {
    boardUsers() {
      return this.$store.getters.boardUsers;
    },
  },
  components: {
    Avatar,
  },
  props: {
    boardId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.board__menu {
  width: 12.5vw;
  height: 20vh;
  position: absolute;
  top: 20%;
  right: 0.5%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 1rem 0;
  border: 0.1rem solid #fff;
  border-radius: 1rem;

  &__info {
    h4 {
      margin-bottom: 0.25rem;
    }

    .avatars__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      & > * {
        margin-right: 0.15rem;
      }

      & > *:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
