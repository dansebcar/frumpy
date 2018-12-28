<script>
import CardTemplate from './CardTemplate.vue';

export default {
  components: {
    CardTemplate,
  },
  props: {
    topic: Object,
  },
};
</script>

<template>
  <CardTemplate>
    <h2 slot="head">
        <a
          :href="$url(`?topic=${topic.id}`)"
        >{{ topic.name }}</a>
    </h2>
    <a
      v-translate
      :href="$url(`topic/${topic.id}/card/`)"
    >Create a new card</a>
  </CardTemplate>
</template>

<style scoped lang="scss">
</style>
