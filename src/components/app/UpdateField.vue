<template>
  <form
    class="update-field"
    @submit.prevent="
      reverse
        ? submitHandler(addditionalInfo, inputValue)
        : submitHandler(inputValue, addditionalInfo);
      disableUpdate();
    "
  >
    <input type="text" v-model.trim="inputValue" />
    <icon-btn icon="check-circle" type="submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputValue: this.initialInputValue,
    };
  },
  props: {
    initialInputValue: String,
    submitHandler: Function,
    addditionalInfo: String,
    disableUpdate: Function,
    reverse: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.update-field {
  display: flex;
  position: relative;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  height: 1.5rem;

  input {
    width: 100%;
    height: 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 1rem;
    padding: 0 0.25rem;
  }

  .icon-btn {
    position: absolute;
    color: lime;
    right: 0;
    font-size: 1rem;
  }
}
</style>
