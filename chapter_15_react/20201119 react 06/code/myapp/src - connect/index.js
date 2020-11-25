import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./store";
/*
    react-redux: 将 redux 引入 react 项目的绑定库
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);