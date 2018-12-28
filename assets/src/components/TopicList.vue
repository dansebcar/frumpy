<script>
import LogLay from './LogLay.vue';

import api from 'utils/api.js';
import debounce from 'utils/debounce.js';

import BaseInput from './BaseInput.vue';
import BasePagination from './BasePagination.vue';
import TopicItem from './TopicItem.vue';

export default {
  components: {
    BaseInput,
    BasePagination,
    TopicItem,
    LogLay,
  },
  data() {
    return {
      query: '',
      level: '',
      results: [],
      count: 0,
      next: null,
      previous: null,
      text: {
        search: this.$gettext('Search'),
      },
    };
  },
  mounted() {
    this.load();
  },
  watch: {
    params: debounce(function() { this.load(); }),
  },
  computed: {
    params() {
      return `q=${this.query}&level=${this.level}`;
    }
  },
  methods: {
    async load(url = `topic/?${this.params}`) {
      const data = await api(url);

      if (data) {
        Object.assign(this, data);
      }
    },
  },
};
</script>

<template>
  <div class="TopicList">
    <BaseInput
      v-model="query"
      :label="text.search"
      class="search"
    />
    <select
      v-model="level"
      class="level"
    >
      <option
        v-translate
        value=""
      >All</option>
      <option
        v-for="[value, label] in $context.levels"
        :key="value"
        :value="value"
      >{{ label }}</option>
    </select>
    <TopicItem
      v-for="topic in results"
      :key="topic.id"
      :topic="topic"
    />
    <BasePagination
      v-bind="{previous, next}"
      @paginate="load"
    />
    <LogLay />
  </div>
</template>

<style scoped lang="scss">
@import "partials/_vars.scss";

.TopicList {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search {
  width: 100%;
  max-width: $bp-s;
}

.level {
  width: 100%;
  max-width: $bp-s;
  font-size: 1.3em;
}
</style>
