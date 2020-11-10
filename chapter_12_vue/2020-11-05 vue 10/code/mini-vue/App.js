import { reactive } from "./core/reactivity/index.js";
import { h } from "./core/h.js";
export const App = {
  render(content) {
    //构建视图
    // h
    // b
    // vue3 composition api
    // 会有很多问题
    // mini-vue
    // 优化的过程
    // 通用性
    return h("div", { id: content.state.id }, [
      h("div", null, String(content.state.count)),
      h(
        "button",
        {
          onClick: content.onClick,
        },
        "click"
      ),
    ]);
    // document.querySelector("#app").innerHTML = ``;
    // const title = document.createElement("div");
    // title.innerText = content.state.count;
    // // button
    // const btn = document.createElement("button");
    // btn.innerText = "click";
    // btn.addEventListener("click", content.onClick);

    // document.querySelector("#app").append(title);
    // document.querySelector("#app").append(btn);
  },
  setup() {
    const state = reactive({
      count: 0,
      id: "123",
    });

    const onClick = () => {
      console.log("??");
      state.count++;
      state.id = "456";
    };

    return {
      state,
      onClick,
    };
  },
};
