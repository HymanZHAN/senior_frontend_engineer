import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
/*
  配置整个项目，使用的路由模式:
    HashRouter 基于 hash 的路由模式
    BrowserRouter 基于 History 的路由模式
*/
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
