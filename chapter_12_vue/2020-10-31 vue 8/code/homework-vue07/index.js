const { createApp } = Vue;
import { useMousePosition } from "./useMousePosition.js";

// App.vue
const App = {
  template: `<di>{{x}} -- {{y}}</di>`,
  setup() {
    const { x, y } = useMousePosition();
    return {
      x,
      y,
    };
  },
};

createApp(App).mount("#app");
