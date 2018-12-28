<script>
export default {
  props: {
    open: Boolean,
  },
  watch: {
    open(value) {
      if (value) {
        this.$refs.dialog.showModal();
      } else {
        this.$refs.dialog.close();
      }
    },
  },
  methods: {
    cancel() {
      this.$emit('close');
    },
  },
};
</script>

<template>
  <dialog
    ref="dialog"
    class="BaseModal"
    @cancel="cancel"
  >
    <h2>
      <slot name="head" />
    </h2>
    <slot />
    <div class="foot">
      <slot name="foot" />
      <button
        v-translate
        @click.prevent="cancel"
      >Cancel</button>
    </div>
  </dialog>
</template>

<style scoped lang="scss">
@import "partials/_vars.scss";

.BaseModal {
  position: fixed;
  top: 0;
  left: 0;

  border: 2px solid $gray-3;
}

.foot {
  display: flex;
  justify-content: space-evenly;
}
</style>
