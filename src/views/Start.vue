<template>
  <v-container xs12 sm6 offset-sm3>
    <error-start />
    <v-row justify="center">
      <div class="hoofd" @click="begin">
        <transition
          enter-active-class="animate__animated animate__slideInDown"
          appear
        >
          <v-img
            contain
            class="logoA"
            :src="
              require(`@/assets/core/logo_${
                $vuetify.theme.dark ? 'light' : 'dark'
              }.png`)
            "
            :width="imageHeight"
            alt="logo"
            style="cursor: pointer"
          />
        </transition>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="tekst mt-10">
        <transition
          enter-active-class="animate__animated animate__slideInDown"
          appear
        >
          <v-img
            contain
            class="logoB"
            src="img/tekst-wit.png"
            :width="imageHeight2"
            alt="logo"
          />
        </transition>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="verder info--text">
        <transition
          enter-active-class="animate__animated animate__fadeInLeft"
          appear
        >
          <p class="logoC">Klik op het logo om verder te gaan <br /></p>
        </transition>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import ResultService from "@/services/ResultService";
import errorStart from "@/components/core/errorStart";
export default {
  name: "Start",
  components: { errorStart },
  data() {
    return {
      firstNameClient: null,
      lastNameClient: "test",
      animated: false,
      tokkie: null,
      token: null,
      email: null,
      companyName: null,
      place: null,
      firstNameUser: null,
      lastNameUser: null,
      emailUser: null,
      telephoneUser: null,
      error: false,
      style: "formeel",
    };
  },

  methods: {
    async begin() {
      // eslint-disable-next-line
      console.log("gaat goed");

      if (this.tokkie) {
        try {
          const payload = {
            tokkie: this.tokkie,
          };
          const response = await ResultService.getStart(payload);
          let app = this;
          app.clientId = response.data.data.clientId;
          app.firstNameClient = response.data.data.firstNameClient;
          app.lastNameClient = response.data.data.lastNameClient;
          app.emailClient = response.data.data.emailClient;
          app.firstNameUser = response.data.data.firstNameUser;
          app.lastNameUser = response.data.data.lastNameUser;
          app.style = response.data.data.style;
          localStorage.setItem("clientId", JSON.stringify(this.clientId));
          localStorage.setItem(
            "firstNameClient",
            JSON.stringify(this.firstNameClient)
          );
          localStorage.setItem(
            "lastNameClient",
            JSON.stringify(this.lastNameClient)
          );
          localStorage.setItem("emailClient", JSON.stringify(this.emailClient));
          localStorage.setItem(
            "firstNameUser",
            JSON.stringify(this.firstNameUser)
          );
          localStorage.setItem(
            "lastNameUser",
            JSON.stringify(this.lastNameUser)
          );
          if (this.style === "formeel") {
            localStorage.setItem("formal", JSON.stringify(true));
          }
          if (this.style === "informeel") {
            localStorage.setItem("formal", JSON.stringify(false));
          }
          this.$router.push({ name: "Intro" });
          console.log("dataklant terug");
        } catch (error) {
          // eslint-disable-next-line no-undef
          await EventBus.$emit("errStart", true);
        }
      } else {
        // eslint-disable-next-line no-undef
        await EventBus.$emit("errStart", true);
      }
    },
  },
  mounted() {
    this.tokkie = JSON.parse(localStorage.getItem("tokkie"));
  },

  computed: {
    // eslint-disable-next-line
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "350px";
        case "md":
          return "350px";
        case "lg":
          return "350px";
        case "xl":
          return "600px";
      }
    },
    // eslint-disable-next-line
    imageHeight2() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "250px";
        case "md":
          return "300px";
        case "lg":
          return "400px";
        case "xl":
          return "600px";
      }
    },
  },
};
</script>

<style scoped>
.hoofd {
  padding-top: 10vh;
}

.logoA {
  animation-duration: 3s;
}

.logoB {
  animation-duration: 1s;
  animation-delay: 3s;
}
.logoC {
  animation-duration: 1s;
  animation-delay: 3s;
}

.verder {
  animation-delay: 3s;
}

v-img {
  margin-left: 20px;
}
</style>
