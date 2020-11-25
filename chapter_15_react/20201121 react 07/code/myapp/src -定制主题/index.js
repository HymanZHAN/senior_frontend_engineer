import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
// import "antd/dist/antd.css";
import "./static/less/index.less";
ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


/*
index.js -- 项目入口（配置项目环境）
  App.js --- 项目根组件
  routes
  store
  component
  static  

*/