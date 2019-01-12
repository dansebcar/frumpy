<script>
import LogLay from './LogLay.vue';

import api from 'utils/api.js';
import context from 'utils/context.js';
import {formContextMixin} from 'utils/mixins.js';

import BaseInput from './BaseInput.vue';
import InfoInput from './InfoInput.vue';

export default {
  mixins: [formContextMixin],
  components: {
    BaseInput,
    InfoInput,
    LogLay,
  },
  data() {
    let {topic, form} = this.$context;

    return {
      topic,
      form,
    };
  },
  methods: {
    async submit() {
      let id = this.form.id;
      let payload = {...this.payload, topic: this.topic.id};
      let card;

      if (id) {
        card = await api(`card/${id.value}/`, {method: 'put', data: payload});
      } else {
        card = await api('card/', {method: 'post', data: payload});
      }

      if (card) {
        // document.location = this.$url();
      }
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
        :field="form.name"
        @update="update"
      />
      <BaseInput
        :field="form.hint"
        @update="update"
      />
      <InfoInput
        :field="form.infos"
        @update="updateList"
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
