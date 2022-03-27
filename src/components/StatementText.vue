<template>
  <div class="mt-5">
    {{ statement }}

    <v-icon v-if="comment" color="info" dark @click.stop="showNote = true"
      >mdi-chat</v-icon
    >

    <NoteModal :visible="showNote" :note="note" @close="showNote = false" />
  </div>
</template>

<script>
import NoteModal from "@/components/NoteModal";
export default {
  name: "StatementText",
  components: { NoteModal },
  props: ["statement", "comment", "note"],
  data() {
    return {
      showNote: false,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
