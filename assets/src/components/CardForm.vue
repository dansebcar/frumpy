<script>
import LogLay from './LogLay.vue';

import api from 'utils/api.js';

import BaseInput from './BaseInput.vue';
import InfoInput from './InfoInput.vue';

export default {
  components: {
    BaseInput,
    InfoInput,
    LogLay,
  },
  data() {
    return {
      name: '',
      hint: '',
      infos: [],
    };
  },
  computed: {
    card() {
      return {
        name: this.name,
        topic: this.topic.id,
        infos: this.infos.map(k => k.id),
      };
    },
    topic() {
      return this.$context.topic;
    },
  },
  methods: {
    async submit() {
      const card = await api('card/', {method: 'post', data: this.card});

      if (card) {
        document.location = this.$url();
      }
    },
    push(info) {
      this.infos.push(info);
    },
  },
}
</script>

<template>
  <div class="CardForm">
    <h1>{{ topic.name }}</h1>
    <form
      class="form"
      @submit="submit"
    >
      <BaseInput
        v-model="name"
        name="name"
      />
      <BaseInput
        v-model="hint"
        name="hint"
      />
      <InfoInput
        :infos="infos"
        @select="push"
      />
      <button
        v-translate
        class="submit"
        @click.prevent="submit"
      >Save</button>
    </form>
    <LogLay />
  </div>
</template>

<style scoped lang="scss">
@import "partials/_vars.scss";

.CardForm {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  width: 100%;
  max-width: $bp-s;

  display: flex;
  flex-direction: column;
}

.submit {
  margin: 10px 0;
  padding: 10px;

  background-color: $color-1;
  border: 1px solid $color-3;
  border-radius: 5px;
}
</style>
