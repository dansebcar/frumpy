<script>
export default {
  props: {
    infos: Array,
  },
};
</script>

<template>
  <ul>
    <li
      v-for="info in infos"
      :key="info.id"
    >
      <button
        @click.prevent="$emit('select', info)"
      >{{ info.name }}</button>
    </li>
  </ul>
</template>

<style scoped lang="scss">
</style>
