<template>
  <div>
    <report />
    <v-toolbar dark :src="require('@/assets/core/alleenlijn.jpg')">
      <v-toolbar-title class="ml-15">Noodopvolging</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggle_dark_mode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import Report from "@/components/core/report";
import { mapGetters } from "vuex";
import AuthService from "@/services/AuthService";

export default {
  name: "Toolbar",
  components: { Report },
  data() {
    return {
      theme: null,
    };
  },
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    logout() {
      this.logoutExt();
      localStorage.removeItem("token");
      localStorage.removeItem("lastNameUser");
      localStorage.removeItem("firstNameUser");
      localStorage.removeItem("companyName");
      localStorage.removeItem("email");
      this.$router.push({ name: "Start" });
    },

    logoutExt() {
      const payload = {
        email: this.email,
      };
      AuthService.logout(payload).then(() => {
        console.log("logged out extern");
      });
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
  },
  computed: {
    ...mapGetters("auth", ["email"]),
  },
};
</script>
<style scoped></style>
