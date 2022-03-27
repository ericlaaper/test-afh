<template>
  <div>
    <v-icon :color="kleur" v-if="number === 0">mdi-numeric-0-circle</v-icon>
    <v-icon :color="kleur" v-if="number === 1">mdi-numeric-1-circle</v-icon>
    <v-icon :color="kleur" v-if="number === 2">mdi-numeric-2-circle</v-icon>
    <v-icon :color="kleur" v-if="number === 3">mdi-numeric-3-circle</v-icon>
    <v-icon :color="kleur" v-if="number === 4">mdi-numeric-4-circle</v-icon>
    <v-icon :color="kleur" v-if="number === 5">mdi-numeric-5-circle</v-icon>
    <v-icon :color="kleur" v-if="number === 6">mdi-numeric-6-circle</v-icon>
    <v-icon :color="kleur" v-if="number === 7">mdi-numeric-7-circle</v-icon>
    <v-icon :color="kleur" v-if="number === 8">mdi-numeric-8-circle</v-icon>
    <v-icon :color="kleur" v-if="number === 9">mdi-numeric-9-circle</v-icon>
    <v-icon :color="kleur" v-if="number === 10">mdi-numeric-10-circle</v-icon>
    <v-icon :color="kleur" v-if="number === 11">mdi-numeric-11-circle</v-icon>
    {{ stepText }}
  </div>
</template>

<script>
export default {
  name: "stepText",
  props: ["stepText", "number", "kleur"],
};
</script>

<style scoped></style>
