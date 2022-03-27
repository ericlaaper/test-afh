<template>
  <v-snackbar
    :timeout="5000"
    auto-heigth
    multi-line
    v-model="successFull"
    color="info"
    absolute
    top
  >
    <v-layout align-center pr-4>
      <v-icon class="pr-3" dark large>mdi-printer</v-icon>
      <v-layout column>
        <div>
          <strong>SUCCES</strong>
        </div>
        <div v-if="formal">
          Uw rapportage is onderweg<br />Let op: deze e-mail kan in uw
          ongewenste e-mailbox terecht komen.
        </div>
        <div v-if="!formal">
          Je rapportage is onderweg<br />Let op: deze e-mail kan in je
          ongewenste e-mailbox terecht komen.
        </div>
      </v-layout>
    </v-layout>
  </v-snackbar>
</template>

<script>
export default {
  name: "report",
  methods: {},

  data() {
    return {
      formal: true,
      successFull: false,
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    EventBus.$on("reportSend", (data) => {
      this.successFull = data;
    });
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>

<style scoped></style>
