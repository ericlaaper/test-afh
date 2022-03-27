<template>
  <v-btn color="primary" small outlined class="mb-5" @click="onClick">
    <slot>Stop</slot>
  </v-btn>
</template>

<script>
export default {
  name: "BtnStop",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
