<template>
  <v-snackbar
    :timeout="7000"
    auto-heigth
    multi-line
    v-model="successFull"
    color="info"
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
        <div>
          Er gaat iets niet goed!!<br />Als u deze site via een knop heeft
          geopend, probeer dan om de url zoals in de mail te kopiëren in de
          browser.<br />
          Mocht u problemen blijven ondervinden, stellen wij het op prijs als u
          contact met ons opneemt.
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
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    EventBus.$on("errStart", (data) => {
      this.successFull = data;
    });
  },
};
</script>

<style scoped></style>
