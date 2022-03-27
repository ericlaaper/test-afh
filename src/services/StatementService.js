import axios from "axios";

export default {
  getStatementA() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartA", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },

  getStatementB() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartB", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },

  getStatementC() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartC", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementD() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartD", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementE() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartE", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementF() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartF", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementG() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartG", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementH() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartH", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementI() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartI", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementJ() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartJ", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementK() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartK", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementL() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartL", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementM() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartM", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementN() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartN", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
  getStatementO() {
    const token = localStorage.getItem("token");
    return axios.get("/nlStatementsChartO", {
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ` + token,
      },
    });
  },
};
