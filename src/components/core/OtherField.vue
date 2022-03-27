<template>
  <div>
    <slot>U kunt hier uw antwoord ingeven</slot>
    <v-textarea
      rows="1"
      class="mt-5"
      outlined
      filled
      label="Anders"
      v-model="innerValue"
      shaped
      :rules="[(v) => v.length <= 40 || 'U hebt maximaal 40 tekens']"
      :counter="40"
    >
    </v-textarea>
  </div>
</template>

<script>
export default {
  name: "RemarkStat",
  props: {
    value: {
      type: null,
    },
  },
  data: () => ({
    innerValue: "",
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>

<style scoped></style>
