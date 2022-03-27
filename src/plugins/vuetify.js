import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#FF0048",
        secondary: "#003895",
        accent: "#07C730",
        error: "#5E4EF6",
        info: "#FF6C00",
        success: "#FF6C00",
        warning: "#2BA681",
        yel: "#FFEA00",
        roodt: "#D01F40",
        spec: "#003895",
      },
      dark: {
        primary: "#FF0048",
        secondary: "#003895",
        accent: "#07C730",
        error: "#5E4EF6",
        info: "#FF6C00",
        success: "#FF6C00",
        warning: "#2BA681",
        yel: "#FFEA00",
        roodt: "#D01F40",
        spec: "#FFEA00",
      },
    },
  },
});
