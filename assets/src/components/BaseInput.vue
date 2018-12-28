<script>
export default {
  props: {
    value: String,
    name: String,
    label: String,
    attrs: Object,
  },
  computed: {
    id() {
      const name = this.name;

      if (name) {
        return `id_${this.name}`;
      }
    },
    field() {
      const fields = this.$context.fields || {};
      return fields[this.name] || {};
    },
    displayLabel() {
      return this.label || this.field.label;
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>

<template>
  <div class="BaseInput">
    <label
      v-if="displayLabel"
      :for="id"
      class="label"
    >{{ displayLabel }}</label>
    <slot />
    <input
      ref="input"
      v-bind="$attrs"
      :id="id"
      :value="value"
      class="input"
      @input="$emit('input', $event.target.value)"
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
