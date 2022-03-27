<template>
  <v-dialog
    v-model="show"
    persistent
    max-width="600px"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="accent">
        <v-btn icon dark @click="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Toelichting</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <div class="ma-10">
        <span v-html="note"></span>
      </div>
      <v-divider />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["visible", "note"],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>

<style scoped></style>
