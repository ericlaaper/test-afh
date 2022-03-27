import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginSecond from "../views/LoginSecond";
import Intro from "@/views/Intro";
import Start from "@/views/Start";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "Start",
      component: Start,
    },
    {
      path: "/intro",
      name: "Intro",
      component: Intro,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginSecond,
    },
    {
      path: "/app",
      name: "App",
      component: Home,
      beforeEnter(to, from, next) {
        if (store.state.auth.token) {
          next();
        } else {
          next("/start");
        }
      },
    },
    {
      path: "*",
      component: Start,
      name: "Start",
    },
  ],
});

export default router;
