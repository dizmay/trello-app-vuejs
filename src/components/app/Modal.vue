<template>
  <div class="modal__container">
    <h3 class="modal__header">{{ header }}</h3>
    <form class="modal__form" @submit.prevent="handleSubmit(inputValue)">
      <div class="modal__text">
        <label v-if="label" for="text">{{ label }}</label>
        <input type="text" id="text" v-model.trim="inputValue" />
      </div>
      <div class="modal__actions">
        <custom-btn light :text="submitText || 'Submit'" type="submit" />
        <custom-btn
          dark
          :text="cancelText || 'Cancel'"
          :handleClick="closeModal"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    submitText: {
      type: String,
    },
    cancelText: {
      type: String,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    handleSubmit: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &__container {
    width: 25%;
    height: 25%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 1% 2% 0;
    border-radius: 1rem;
  }

  &__form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }

  &__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      margin-bottom: 0.5rem;
    }

    input {
      font-size: 1.5rem;
    }
  }

  &__actions {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
