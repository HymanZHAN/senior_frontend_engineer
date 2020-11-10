import { createStore } from "vuex";

export default createStore({
  state: {
    count: 1
  },
  mutations: {
    addCount(state) {
      state.count++;
    }
  },
  actions: {},
  modules: {}
});
