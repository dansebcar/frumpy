<script>
import {fieldMixin} from 'utils/form.js';

export default {
  mixins: [fieldMixin],
  props: {
    type: {type: String, default: 'text'},
  },
  computed: {
    name() {
      return this.field.name;
    },
    label() {
      return this.field.label;
    },
    id() {
      return this.field.id;
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    update(event) {
      this.value = event.target.value;
    },
  },
};
</script>

<template>
  <div class="BaseInput">
    <label
      v-if="label"
      :for="id"
      class="label"
    >{{ label }}</label>
    <slot />
    <input
      ref="input"
      :id="id"
      :name="name"
      :value="value"
      class="input"
      @input="update"
    >
  </div>
</template>

<style scoped lang="scss">
@import "partials/_vars.scss";

.BaseInput {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

.label {
  margin: 5px 0;

  &::first-letter {
    text-transform: uppercase;
  }
}

.input {
  padding: 2px 5px;

  border-radius: 10px;
  border: 1px solid $gray-3;
  outline: unset;

  font-size: 1.5em;

  &:focus {
    border-color: orange;
  }
}
</style>
