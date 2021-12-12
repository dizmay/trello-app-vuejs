<template>
  <div class="card-create">
    <label for="title">title</label>
    <input type="text" id="title" />
    <label for="description">description</label>
    <input type="text" id="description" />
    <div>
      <button @click="setIsCardAction(false)">cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    setIsCardAction: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-create {
  color: #fff;
}
</style>
