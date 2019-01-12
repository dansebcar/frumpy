<script>
import CardTemplate from './CardTemplate.vue';

export default {
  components: {
    CardTemplate,
  },
};
</script>

<template>
  <div class="CardPlaceholder">
    <CardTemplate v-if="$context.isAuthenticated">
      <h1
        v-translate
        slot="head"
      >There's none left!</h1>
      <span
        v-translate
      >Create a new one</span>
    </CardTemplate>
    <CardTemplate v-else>
      <h1
        v-translate
        slot="head"
      >Welcome to Frumpy!</h1>
      <p
        v-translate
      >
        Please log in or sign up to view cards
      </p>
    </CardTemplate>
  </div>
</template>

<style scoped lang="scss">
.CardPlaceholder {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
