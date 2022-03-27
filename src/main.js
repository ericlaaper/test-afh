import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vueVimeoPlayer from "vue-vimeo-player";
import "./vee-validate";
import "animate.css";
window.EventBus = new Vue();
Vue.config.productionTip = false;
Vue.use(vueVimeoPlayer);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
