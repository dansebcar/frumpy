<script>
const levels = ["info", "success", "error"];

const methods = levels.reduce(
  (acc, val) => {
    acc[val] = function(msg) {
      let {name, message} = msg;

      if (name && message) {
        this._add(`${name}: ${message}`, val);
      } else {
        this._add(msg, val);
      }
    }
    return acc;
  },
  {},
);

export default {
  data() {
    return {
      id: 0,
      logs: {},
    };
  },
  methods: {
    _add(message, level) {
      const id = this.id++;
      const timeout = window.setTimeout(this._remove(id), 10 * 1000);
      this.$set(this.logs, id, {message, level, timeout});
    },
    _remove(id) {
      return () => this.$delete(this.logs, id);
    },
    ...methods,
  },
};
</script>

<template>
  <div class="Log">
    <span
      v-for="({message, level}, id) in logs"
      :key="id"
      :class="level"
    >
      {{ message }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.Log {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  max-height: 60vh;
  overflow-y: auto;
  z-index: 10;
}

%log {
  margin: 5px;
  padding: 3px;
  border-radius: 5px;

  font-size: 10px;

  user-select: none;
}

@mixin border-box($hue) {
  background-color: hsla($hue, 100%, 80%, 0.8);
  border: 2px solid hsla($hue, 100%, 50%, 0.8);
}

.info {
  @extend %log;
  @include border-box(50);
}

.error {
  @extend %log;
  @include border-box(0);
}

.success {
  @extend %log;
  @include border-box(120);
}
</style>
