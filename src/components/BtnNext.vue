<template>
  <v-btn color="accent" small class="mb-5 mr-8" @click="onClick">
    <slot>Verder</slot>
  </v-btn>
</template>

<script>
export default {
  name: "btnnext",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped></style>
