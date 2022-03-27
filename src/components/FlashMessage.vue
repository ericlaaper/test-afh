<template>
  <v-alert icon="mdi-shield-lock-outline" prominent text type="info">
    <p v-if="message" class="mt-2" key="message">
      {{ message }}
    </p>
    <p v-if="error && getType(error) === 'string'" class="mt-2" key="error">
      {{ error }}
    </p>
    <ul v-if="getType(error) === 'object'" class="mt-2" key="error-list">
      <li v-for="key in errorKeys" :key="key">
        <b class="font-bold capitalize">{{ key | titleCase }}</b>
        <ul class="ml-2">
          <li v-for="(item, index) in getErrors(key)" :key="`${index}-error`">
            {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </v-alert>
</template>

<script>
export default {
  name: "FlashMessage",
  props: {
    message: {
      type: String,
      default: null,
    },
    error: {
      type: [Object, String],
      default: null,
    },
  },
  computed: {
    errorKeys() {
      if (!this.error || this.getType(this.error) === "string") {
        return null;
      }
      return Object.keys(this.error);
    },
  },
  methods: {
    getErrors(key) {
      return this.error[key];
    },
    getType(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    },
  },
  filters: {
    titleCase(value) {
      return value.replace("_", " ");
    },
  },
};
</script>
