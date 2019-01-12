<script>
import LogLay from './LogLay.vue';

import api from 'utils/api.js';
import debounce from 'utils/debounce.js';
import formContextMixin from 'utils/form.js';

import BaseInput from './BaseInput.vue';
import BasePagination from './BasePagination.vue';
import TopicItem from './TopicItem.vue';

export default {
  mixins: [formContextMixin],
  components: {
    BaseInput,
    BasePagination,
    TopicItem,
    LogLay,
  },
  data() {
    return {
      level: '',
      results: [],
      count: 0,
      next: null,
      previous: null,
      form: {
        level: {
          value: '',
        },
        query: {
          label: this.$gettext('Search'),
          value: '',
        },
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
      return {q: this.form.query.value, level: this.form.level.value};
    },
  },
  methods: {
    async load(url = `topic/?${new URLSearchParams(this.params)}`) {
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
      :field="form.query"
      class="search"
      @update="update"
    />
    <div class="level">
      <select
        v-model="form.level.value"
        class="level__select"
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
      <a
        v-if="level"
        v-translate
        :href="$url(`?topic=${level}`)"
        class="level__link"
      >All</a>
    </div>
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
  display: flex;
  align-items: center;

  &__select {
    font-size: 1.3em;
    flex: 1;
  }

  &__link {
    margin: 0 10px;
  }
}
</style>
