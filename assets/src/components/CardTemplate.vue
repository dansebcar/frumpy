<script>
export default {};
</script>

<template>
  <div class="CardTemplate">
    <div class="head">
      <slot name="head" />
    </div>
    <div class="body">
      <slot />
    </div>
    <div
      v-if="$slots.foot"
      class="foot"
    >
      <slot name="foot" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "partials/_vars.scss";

.CardTemplate {
  contain: content;

  $margin: 10px;

  width: calc(100% - #{2 * $margin});
  max-width: $bp-s;
  margin: $margin;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid $color-2;
  border-radius: 5px;
  box-shadow: 0 0 10px grey;
}

.head {
  width: 100%;
  background-color: $color-1;

  display: block;
  text-align: center;

  font-size: 0.8em;
}

.body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.foot {
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  border-top: 1px solid $color-3;
  background-color: $gray-2;
}
</style>
