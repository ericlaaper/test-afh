import axios from "axios";

// const token = this.$store.getters("auth", ["token"]);
const token = localStorage.getItem("token");
export const apiClientB = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: "Application/json",
    Authorization: `Bearer ` + token,
  },
});

// axios.interceptors.request.use(
//   (config) => {
//     // let tokenB = this.$store.getters["auth/token"];
//     let tokenB =
//       "7e5d2c4ba4df5f0342a3e7ceab21540c08f63e70948d607d1c9b9b937931e319";
//
//     if (tokenB) {
//       config.headers["Authorization"] = `Bearer ${tokenB}`;
//     }
//
//     return config;
//   },
//
//   (error) => {
//     return Promise.reject(error);
//   }
// );
