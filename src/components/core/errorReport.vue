<template>
  <v-snackbar
    :timeout="7000"
    auto-heigth
    multi-line
    v-model="successFull"
    color="primary"
    absolute
    centered
    class="mt-15"
  >
    <v-layout align-center pr-4>
      <v-icon class="pr-3" dark large>mdi-alert-circle</v-icon>
      <v-layout column>
        <div>
          <strong>FOUT</strong>
        </div>
        <div v-if="formal">
          Er gaat iets niet goed!!<br />Probeer het a.u.b. nogmaals.<br />
          Mocht u problemen blijven ondervinden, stellen wij het op prijs als u
          contact met ons opneemt.
        </div>
        <div v-if="!formal">
          Er gaat iets niet goed!!<br />Probeer het nog een keer.<br />
          Mocht je problemen blijven ondervinden, stellen wij het op prijs als
          je contact met ons opneemt.
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
      successFull: false,
      formal: true,
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    EventBus.$on("errReport", (data) => {
      this.successFull = data;
    });
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>

<style scoped></style>
