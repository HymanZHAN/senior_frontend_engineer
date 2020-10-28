import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// render
// template(不是 html) -> vue 编译 -> render -> 返回 vnode tree -> 转换成真实的 dom 元素 -> 挂载到根容器内
// vue3 的时候
new Vue({
  render: (h) => h(App),
}).$mount("#app");
