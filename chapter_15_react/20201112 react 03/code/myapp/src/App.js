import { Component } from "react";
import Child from "./Child";
/*
  children: 调用子组件时，如果在标签对之前，填写内容，该内容会给加个 props 的 children 属性
*/
/*
  dangerouslySetInnerHTML: 
    1. 用于给 React 元素添加 innerHTML
    2. 接收的值是一个对象，该对象的 `__html` 属性中，是放 innerHTML 的地方

*/
const data = `
  <h2>又又想造反</h2>
  <p>今天晚上又又罢工了</p>
`;
export default class App extends Component {
  render() {
    return <div>
        <Child>
            <div
              dangerouslySetInnerHTML = {{
                __html:data
              }}
            ></div>
        </Child>
    </div>
  }
}