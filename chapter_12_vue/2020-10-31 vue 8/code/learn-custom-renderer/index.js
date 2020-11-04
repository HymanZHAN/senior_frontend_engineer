const { createApp } = Vue;

// 渲染原理
// 很普通的 js 对象
// const vdom = {
//   tag: "div",
//   children: "x -- y",
//   parent: "#app",
// };
// 1. template ->
//compile ->
//render() ->
//vnode(虚拟节点) vdom(tree) ->
// mount (vdom -》
// 调用了渲染平台的api(dom) -》
//真实的 dom 元素) -> 挂载到根容器上

// custom renderer
// 自定义渲染器
// vue -》 渲染到 dom 平台
//     -> 渲染到 canvas 平台 -> ios安卓平台
// 从虚拟dom 到真实的dom 中间的转换过程 -> api 

const { h } = Vue;

console.log(h("div"));

// App.vue
const App = {
  template: `<di>{{x}} -- {{y}}</di>`,
  setup() {
    const x = 10;
    const y = 10;
    return {
      x,
      y,
    };
  },
};

// #app -> 让我们找到根容器
// App  -> 组件 -》 vdom
createApp(App).mount("#app");
