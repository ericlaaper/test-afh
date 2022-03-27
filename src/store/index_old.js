import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = "http://localhost:8000/api/";

export default new Vuex.Store({
  state: {
    userstart: null,
    usereind: null,
  },

  mutations: {
    loginA({ commit }, credentials) {
      return axios.post("/loginchart", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },
    setUserData(state, userData1) {
      state.userstart = userData1;
      localStorage.setItem("user", JSON.stringify(userData1));
    },

    setUserData2(state, userData2) {
      state.user = userData2;
      localStorage.setItem("user", JSON.stringify(userData2));
      axios.defaults.headers.common.Authorization = `Bearer ${userData2.token}`;
    },

    clearUserData() {
      localStorage.removeItem("user");
      location.reload();
    },
  },

  actions: {
    loginA({ commit }, credentials) {
      return axios.post("/loginchart", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },
    loginB({ commit }, credentials) {
      return axios.post("/login", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },
    logout({ commit }) {
      commit("clearUserData");
    },
  },

  getters: {
    isLogged: (state) => !!state.user,
  },
});
