<template>
  <v-snackbar
    :timeout="5000"
    auto-heigth
    multi-line
    v-model="successFull"
    color="info"
    absolute
    centered
    class="mt-15"
  >
    <v-layout align-center pr-4>
      <v-icon class="pr-3" dark large>mdi-email</v-icon>
      <v-layout column>
        <div>
          <strong>SUCCES</strong>
        </div>
        <div>
          De nieuwe toegangscode is verzonden<br />Let op: deze e-mail kan in de
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
      successFull: false,
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    EventBus.$on("newCode", (data) => {
      this.successFull = data;
    });
  },
};
</script>

<style scoped></style>
