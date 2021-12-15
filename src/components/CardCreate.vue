<template>
  <form
    class="card-create"
    @submit.prevent="handleSubmit(titleModel, descriptionModel)"
  >
    <label for="title">Title:</label>
    <input type="text" id="title" v-model.trim="titleModel" />
    <label for="description">Description:</label>
    <input type="text" id="description" v-model.trim="descriptionModel" />
    <div class="card-create__actions">
      <icon-btn icon="check-circle" type="submit" />
      <icon-btn icon="ban" :handleClick="disableEditMode" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      titleModel: this.title || "",
      descriptionModel: this.description || "",
    };
  },
  props: {
    disableEditMode: {
      type: Function,
      required: true,
    },
    handleSubmit: {
      type: Function,
      required: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-create {
  display: flex;
  flex-direction: column;
  color: #fff;

  input {
    color: #fff;
    background-color: transparent;
    border: none;
    border-bottom: 0.1rem solid #fff;
    margin-bottom: 0.5rem;
  }

  &__actions {
    display: flex;
    justify-content: center;
  }
}
</style>
