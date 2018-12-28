<script>
import LogLay from './LogLay.vue';

import api from 'utils/api.js';

import CardItem from './CardItem.vue';
import CardPlaceholder from './CardPlaceholder.vue';

export default {
  components: {
    CardItem,
    CardPlaceholder,
    LogLay,
  },
  data() {
    const params = new URLSearchParams(location.search);

    return {
      card: {},
      topic: params.get('topic') || '',
    };
  },
  mounted() {
    this.feed();
  },
  methods: {
    async feed(exclude = '') {
      const data = await api(`card/feed/?topic=${this.topic}&exclude=${exclude}`);
      this.card = data;
    },
  },
};
</script>

<template>
  <div class="App">
    <CardItem
      v-if="card"
      :card="card"
      :key="card.id"
      @respond="feed"
    />
    <CardPlaceholder
      v-else
      :topic="topic"
    />
    <LogLay />
  </div>
</template>

<style scoped lang="scss">
.App {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
