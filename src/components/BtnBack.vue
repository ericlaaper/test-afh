<template>
  <v-btn color="accent" small outlined class="mb-5 mr-8" @click="onClick">
    <slot>Terug</slot>
  </v-btn>
</template>

<script>
export default {
  name: "btnback",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped></style>
