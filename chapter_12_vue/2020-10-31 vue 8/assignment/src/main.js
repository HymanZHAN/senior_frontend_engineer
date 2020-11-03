import { createApp } from "./runtime-canvas";
import { createRootContainer } from "./game";
import App from "./App.vue";

createApp(App).mount(createRootContainer());
