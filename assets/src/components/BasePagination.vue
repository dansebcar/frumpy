<script>
export default {
  props: {
    next: String,
    previous: String,
  },
};
</script>

<template>
  <div class="BasePagination">
    <button
      v-translate
      :disabled="!previous"
      @click.prevent="$emit('paginate', previous)"
    >Previous</button>
    <button
      v-translate
      :disabled="!next"
      @click.prevent="$emit('paginate', next)"
    >Next</button>
  </div>
</template>

<style scoped lang="scss">
@import "partials/_vars.scss";

.BasePagination {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>
