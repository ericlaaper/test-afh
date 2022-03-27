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
      <v-icon class="pr-3" dark large>mdi-account-remove-outline</v-icon>
      <v-layout column>
        <div>
          <strong>DankS</strong>
        </div>
        <div v-if="formal">
          Jammer dat u deze QuickScan niet wil invullen<br />Ik denk dat dit
          onderwerp belangrijk voor u kan zijn.<br />U kunt altijd later
          besluiten alsnog deze QuickScan in te vullen.
        </div>
        <div v-if="!formal">
          Jammer dat je deze QuickScan niet wil invullen<br />Ik denk dat dit
          onderwerp belangrijk voor je kan zijn.<br />Je kan altijd later
          besluiten alsnog deze QuickScan in te vullen.
        </div>
      </v-layout>
    </v-layout>
  </v-snackbar>
</template>

<script>
export default {
  name: "notInt",
  methods: {},

  data() {
    return {
      formal: true,
      successFull: false,
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    EventBus.$on("notInt", (data) => {
      this.successFull = data;
    });
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>

<style scoped></style>
