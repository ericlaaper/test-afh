<template>
  <v-overlay>
    <v-progress-circular
      :size="70"
      :width="7"
      color="info"
      indeterminate
    ></v-progress-circular>
    <h3>Uw data wordt opgeslagen</h3>
  </v-overlay>
</template>
<script>
export default {
  name: "saving",
};
</script>
