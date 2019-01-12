<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<template>
  <li
  >{{ info.name }}
    <button
      @click.prevent="$emit('remove', info)"
    >&times;</button>
  </li>
</template>

<style>

</style>
