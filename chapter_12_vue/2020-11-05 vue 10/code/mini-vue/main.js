import { watchEffect, reactive } from "./core/reactivity/index.js";
import { h } from "./core/h.js";
// 响应式对象 依赖收集
// 响应式对象 触发依赖

// a -> A 就是 a收集的依赖

// let b = 0;
// effect(() => {
//   b = a.value * 10;
// console.log(b);
// });

// a-> 触发依赖
// a.value = 30;

// watchEffect
// setup
import { App } from "./App.js";
import { createApp } from "./core/index.js";

// 和vue3 是一模一样的
createApp(App).mount(document.querySelector("#app"));
