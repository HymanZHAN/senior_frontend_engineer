import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
// 需要导入 样式
import "element3/lib/theme-chalk/index.css";
import Element3 from "element3";
console.log(Element3);

// vuex
// 全新的 vuex 的使用方式
// use(store)
createApp(App)
  .use(store)
  .use(Element3)
  .mount("#app");
