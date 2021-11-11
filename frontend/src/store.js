import { createStore } from "vuex";
import { getAPI } from "./axios-api";

export default createStore({
  state: {
    accessToken: null,
    refreshToken: null,
    APIData: "",
  },
  mutations: {
    updateStorage(state, { access, refresh }) {
      state.accessToken = access;
      state.refreshToken = refresh;
    },
  },
  actions: {
    userLogin(context, userCredentials) {
      return new Promise((resolve, reject) => {
        getAPI
          .post("/api-token/", {
            username: userCredentials.username,
            password: userCredentials.password,
          })
          .then((response) => {
            console.log(reject);
            context.commit("updateStorage", {
              access: response.data.access,
              refresh: response.data.refresh,
            });
            resolve();
          });
      });
    },
  },
  modules: {},
});
