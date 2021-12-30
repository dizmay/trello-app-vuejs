<template>
  <div class="modal__backdrop" @click.self="closeModal">
    <div class="modal">
      <div class="modal__info">
        <div class="modal__heading">
          <h1 v-if="!isTitleUpdate" class="modal__title">{{ title }}</h1>
          <UpdateField
            v-else
            :addditionalInfo="description"
            :submitHandler="updateCard"
            :disableUpdate="disableTitleUpdate"
            :initialInputValue="title"
          />
          <span class="modal__column">in "{{ columnTitle }}" column</span>
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
          <span v-if="!isDescriptionUpdate">{{ description }}</span>
          <UpdateField
            v-else
            :addditionalInfo="title"
            :submitHandler="updateCard"
            :disableUpdate="disableDescriptionUpdate"
            :initialInputValue="description"
            reverse
          />
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
              v-model.trim="comment"
            />
            <icon-btn icon="paper-plane" :handleClick="createComment" />
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
        <custom-btn light text="Change title" :handleClick="applyTitleUpdate" />
        <custom-btn
          light
          text="Change description"
          :handleClick="applyDescriptionUpdate"
        />
        <custom-btn light text="Delete card" :handleClick="removeCard" />
        <custom-btn light text="Refresh info" :handleClick="refreshInfo" />
      </div>
    </div>
  </div>
</template>

<script>
import UserAssignment from "@/components/app/UserAssignment.vue";
import Comment from "@/components/Comment.vue";
import UpdateField from "@/components/app/UpdateField.vue";

export default {
  data() {
    return {
      comment: "",
      isTitleUpdate: false,
      isDescriptionUpdate: false,
    };
  },
  methods: {
    createComment() {
      if (this.comment.length) {
        this.$store.dispatch("createComment", {
          text: this.comment,
          taskId: this.taskId,
          boardId: this.boardId,
          columnId: this.columnId,
        });
        this.comment = "";
      }
    },
    refreshInfo() {
      this.$store.dispatch("getColumns", this.boardId);
    },
    applyTitleUpdate() {
      this.isDescriptionUpdate = false;
      this.isTitleUpdate = true;
    },
    applyDescriptionUpdate() {
      this.isTitleUpdate = false;
      this.isDescriptionUpdate = true;
    },
    disableTitleUpdate() {
      this.isTitleUpdate = false;
    },
    disableDescriptionUpdate() {
      this.isDescriptionUpdate = false;
    },
  },
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
    removeCard: Function,
    updateCard: Function,
  },
  components: {
    UserAssignment,
    Comment,
    UpdateField,
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
  cursor: default;

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
    span {
      font-style: italic;
      color: #ccc;
    }

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
      height: 24rem;
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
