<template>
  <div class="notifications" v-if="notifications.length">
    <div
      v-for="notification in notifications"
      :key="notification.invId"
      class="notifications__item"
    >
      <span>
        {{
          `${notification.username} invites you to "${notification.title}" board`
        }}
      </span>
      <div class="notifications__actions">
        <custom-btn
          light
          text="Accept"
          :handleClick="replyToNotification(notification.invId, true)"
        />
        <custom-btn
          light
          text="Decline"
          :handleClick="replyToNotification(notification.invId, false)"
        />
      </div>
    </div>
  </div>
  <h2 v-else class="notifications__empty">You don't have any notifications</h2>
</template>

<script>
export default {
  methods: {
    replyToNotification(invId, isAccepted) {
      return () => {
        this.$store.dispatch("replyToNotification", { invId, isAccepted });
      };
    },
  },
  computed: {
    notifications() {
      return this.$store.getters.notifications;
    },
  },
};
</script>

<style lang="scss" scoped>
.notifications {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #000;
    margin: 0.5rem 0;
    border-radius: 1rem;

    span {
      padding-left: 1rem;
      font-weight: 700;
    }
  }

  &__empty {
    text-align: center;
    color: #fff;
    padding-top: 0.5rem;
  }
}
</style>
