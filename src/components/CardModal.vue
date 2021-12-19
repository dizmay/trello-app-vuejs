<template>
  <div class="modal__backdrop" @click.self="closeModal">
    <div class="modal">
      <div class="modal__info">
        <div class="modal__heading">
          <h1 class="modal__title">{{ title }}</h1>
          <span class="modal__column">in list "{{ columnTitle }}"</span>
        </div>
        <UserAssignment
          :assignedUsers="assignedUsers"
          :boardId="boardId"
          :columnId="columnId"
          :taskId="taskId"
          :boardUsers="boardUsers"
        />
        <div class="modal__description">
          <h2>Description:</h2>
          <span>{{ description }}</span>
        </div>
        <div class="modal__comments">
          <h2>Comments:</h2>
          <div class="modal__comments__actions">
            <textarea
              name="comments"
              id="comments"
              cols="50"
              rows="3"
              placeholder="Enter your message..."
            />
            <icon-btn icon="paper-plane" />
          </div>
          <div class="modal__comments__section">
            <Comment
              v-for="comment in comments"
              :key="comment.id"
              :user="comment.username"
              :message="comment.text"
            />
          </div>
        </div>
      </div>
      <div class="modal__actions">
        <h1>Menu</h1>
        <custom-btn light text="Change title" />
        <custom-btn light text="Change description" />
        <custom-btn light text="Delete card" />
        <custom-btn light text="Refresh info" />
      </div>
    </div>
  </div>
</template>

<script>
import UserAssignment from "@/components/app/UserAssignment.vue";
import Comment from "@/components/Comment.vue";

export default {
  props: {
    title: String,
    description: String,
    assignedUsers: Array,
    boardId: String,
    columnId: Number,
    taskId: Number,
    boardUsers: Array,
    columnTitle: String,
    closeModal: Function,
    comments: Array,
  },
  components: {
    UserAssignment,
    Comment,
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 80%;
  color: #fff;
  padding: 1rem;
  border-radius: 1rem;

  &__backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #a9a9a9, $alpha: 0.8);
    z-index: 1;
  }

  &__heading {
    margin-bottom: 5%;
  }

  &__info {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
  }

  &__column {
    font-style: italic;
    text-decoration: underline;
  }

  &__assignment {
    position: relative;
    width: fit-content;
    margin-bottom: 3%;
  }

  &__description {
    & > * {
      padding: 0.5rem 0;
    }
  }

  &__comments {
    margin-top: 1rem;

    & > * {
      padding: 0.5rem 0;
    }

    textarea {
      resize: none;
      padding: 0.2rem;
      margin-right: 1rem;
    }

    &__actions {
      display: flex;
      align-items: center;

      .icon-btn {
        font-size: 1.25rem;
      }
    }

    &__section {
      height: 25vw;
      overflow: auto;
    }
  }

  &__actions {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-left: 0.1rem solid #fff;

    h1 {
      text-align: center;
    }
  }
}
</style>
