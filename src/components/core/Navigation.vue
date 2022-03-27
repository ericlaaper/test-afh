<template>
  <v-navigation-drawer app clipped permanent mini-variant expand-on-hover>
    <v-list>
      <v-list-item class="px-15">
        <v-img
          :src="
            require(`@/assets/core/logo_${
              $vuetify.theme.dark ? 'light' : 'dark'
            }.png`)
          "
          height="5vh;"
          width="10vh"
        />
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title"> Sandra Adams </v-list-item-title>
          <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav shaped>
      <v-list-item to="/dashboard" class="v-list-item">
        <v-list-item-icon><v-icon>mdi-view-dashboard</v-icon></v-list-item-icon>
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>
      <v-list-item to="/projects" class="v-list-item">
        <v-list-item-icon><v-icon>mdi-view-list</v-icon></v-list-item-icon>
        <v-list-item-title>Projecten</v-list-item-title>
      </v-list-item>
      <v-list-item to="/consultants" class="v-list-item">
        <v-list-item-icon
          ><v-icon>mdi-account-multiple</v-icon></v-list-item-icon
        >
        <v-list-item-title>Consultants</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list-group
      :value="true"
      prepend-icon="mdi-account-circle"
      color="primary--text"
      nav
      shaped
    >
      <template v-slot:activator>
        <v-list-item-title>Admin</v-list-item-title>
      </template>
      <v-list nav shaped>
        <v-list-item to="/colors">
          <v-list-item-icon
            ><v-icon class="primary--text"
              >mdi-view-list</v-icon
            ></v-list-item-icon
          >
          <v-list-item-title class="apple primary--text"
            >Kleuren</v-list-item-title
          >
        </v-list-item>
        <v-list-item to="/photos">
          <v-list-item-icon><v-icon>mdi-view-list</v-icon></v-list-item-icon>
          <v-list-item-title class="apple">Foto's</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-list-group>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      color: "green",
    };
  },
};
</script>

<style scoped>
.v-list-item--active {
  background-color: #07c730;
}
.apple {
  font-size: 0.8rem !important;
}
</style>
