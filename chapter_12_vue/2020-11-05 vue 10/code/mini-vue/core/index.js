// createApp
import { watchEffect } from "./reactivity/index.js";
import { mountElement, diff } from "./renderer.js";

export function createApp(rootComponent) {
  // app
  return {
    mount(rootContainer) {
      // 组件的 setup
      // -> 响应式对象
      let isMounted = false;
      let prevSubTree;
      const setupResult = rootComponent.setup();

      watchEffect(() => {
        if (!isMounted) {
          isMounted = true;
          const subTree = rootComponent.render(setupResult);

          console.log(subTree);
          // subTree -> mount 成正式的 dom 元素
          mountElement(subTree, rootContainer);
          prevSubTree = subTree;
        } else {
          const subTree = rootComponent.render(setupResult);
          // diff
          diff(prevSubTree, subTree);
          prevSubTree = subTree;
        }
      });
    },
  };
}
