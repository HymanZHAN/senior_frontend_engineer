import * as Reactivity from "./node_modules/@vue/reactivity/dist/reactivity.esm-browser.js";
const { ref, effect } = Reactivity;
console.log(ref);

// 响应式对象 依赖收集
// 响应式对象 触发依赖

const a = ref(10);

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

const App = {
  render(content) {
    //构建视图
    // h
    // b
    // vue3 composition api
    // 会有很多问题
    // mini-vue
    effect(() => {
      document.querySelector("#app").innerHTML = `` 
      const title = document.createElement("div");
      title.innerText = content.count.value;
      // button
      const btn = document.createElement("button");
      btn.innerText = "click";
      btn.addEventListener("click", content.onClick);

      document.querySelector("#app").append(title);
      document.querySelector("#app").append(btn);
    });
  },
  setup() {
    const count = ref(0);
    const onClick = () => {
      count.value++;
    };

    return {
      count,
      onClick,
    };
  },
};

App.render(App.setup());
