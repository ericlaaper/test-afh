import * as API from "@/services/API";

export default {
  loginB(payload) {
    return API.apiClient.post("/loginAscan", payload);
  },
  logout(payload) {
    const token = localStorage.getItem("token");
    return API.apiClient.post("/logoutAscan", payload, {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  notInt(payload) {
    return API.apiClient.post("/notIntAscan", payload);
  },
};
