import Vue from "vue";
import Vuex from "vuex";
import { SET_COUNT } from "./mutations";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [SET_COUNT](state, newCount) {
      state.count = newCount;
    }
  },
  actions: {
    increaseCount({ commit, state }) {
      commit(SET_COUNT, state.count + 1);
    },
    decreaseCount({ commit, state }) {
      commit(SET_COUNT, state.count - 1);
    }
  },
  modules: {}
});
