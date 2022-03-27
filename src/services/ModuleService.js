import axios from "axios";

export default {
  getStatus(payload) {
    const token = localStorage.getItem("token");
    return axios.post("/moduleslChart", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
