import Vue from "vue";
import Vuex from "vuex";

// 插件的使用方式
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "learn vuex",
    name: "xiaohong",
    age: 29,
  },
  getters: {
    // 计算属性时一样的，只不过是全局的
    // 可以缓存的
    tenYearsOld(state) {
      return state.age + 10;
    },
  },
  mutations: {
    changeAge(state, payload) {
      // setTimeout(() => {
      const { age } = payload;
      state.age = age;
      // }, 2000);
    },
    changeMsg(state, payload) {
      setTimeout(() => {
        const { msg } = payload;

        // console.log(payload);
        // console.log(state);
        state.msg = msg;
      }, 5000);
    },
  },

  // 是不是记录
  // changeMsg -> 5000
  // changeAge -> 2000
  // 调用顺序不能保证了
  actions: {
    changeAge(context, payload) {
      setTimeout(() => {
        context.commit("changeAge", {
          age: payload.age,
        });
      }, 2000);
    },
  },
  modules: {},
});
