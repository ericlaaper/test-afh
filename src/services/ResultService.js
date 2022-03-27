import axios from "axios";

export default {
  getStart(payload) {
    return axios.post("/autoLoginAscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },
  getNewCode(payload) {
    return axios.post("/newCodeAscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
      },
    });
  },

  getReport(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/sendReportAscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
