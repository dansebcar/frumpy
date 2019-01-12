<script>
import api from 'utils/api.js';

import CardTemplate from './CardTemplate.vue';

const answer = /\[(.*?)]/g;

export default {
  components: {
    CardTemplate,
  },
  props: {
    card: Object,
  },
  data() {
    return {
      infosShown: false,
      answerShown: false,
    };
  },
  computed: {
    topic() {
      return this.card.topic || {};
    },
    infos() {
      return this.card.infos || [];
    },
    name() {
      const name = this.card.name;

      if (name) {
        const replacement = this.answerShown ? '$1' : '<span>$1</span>';
        return this.card.name.replace(answer, replacement);
      }
    },
  },
  methods: {
    respond(status) {
      api(`card/${this.card.id}/${status}/`, {method: 'post'});
      this.$emit('respond', this.card.id);
    },
  },
};
</script>

<template>
  <CardTemplate class="CardItem">
    <template slot="head">
      <h1>
        {{ topic.name }}
      </h1>
      <h3 v-if="topic.hint">
        {{ topic.hint }}
      </h3>
      <h3 v-if="card.hint">
        {{ card.hint }}
      </h3>
    </template>
    <div
      class="name"
      v-html="name"
    />
    <div v-if="infos.length">
      <ul
        class="infos"
        v-if="infosShown"
      >
        <li
          v-for="info in infos"
          :key="info.id"
        >{{ info.name }}</li>
      </ul>
      <button
        v-else
        v-translate
        @click="infosShown = true"
      >Need a hint?</button>
    </div>
    <template slot="foot">
      <div
        v-if="answerShown"
        class="controls"
      >
        <button
          class="fail"
          @click="respond('fail')"
        >&times; <translate>No</translate></button>
        <button
          class="win"
          @click="respond('win')"
        >✓ <translate>Yes</translate></button>
      </div>
      <button
        v-else
        v-translate
        class="show"
        @click="answerShown = true"
      >
        Show
      </button>
    </template>
  </CardTemplate>
</template>

<style scoped lang="scss">
@import "partials/_vars.scss";

.name {
  & /deep/ span {
    color: transparent;
    user-select: none;
    background-color: $gray-3;
  }
}

.infos {
  padding: 5px;
  margin: 5px;

  list-style-type: square;
}

.controls {
  width: 100%;
  display: flex;
}

%control {
  flex: 1;
  color: white;
}

.show {
  @extend %control;

 background-color: $color-2;
}

.fail {
  @extend %control;

  background-color: red;
}

.win {
  @extend %control;

  background-color: green;
}
</style>
