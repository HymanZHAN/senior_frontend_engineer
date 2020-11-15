import { useEffect, useState } from "react";
import { useScroll } from "./hook";
/*
  hooks 使用规则：
    1. 必须在 React 函数中使用，（函数组件、自定义hooks）
    2. hook 必须在函数最外层使用
  
  React Hooks 优势
    - 简化组件逻辑
    - 复用状态逻辑
    - 无需使用类组件编写  
    

  自定义 hook：
    自定义 hook 的命名必须以 use 开始
*/
function App() {
  const [scroll,setScroll] = useScroll();
  return ( <div>
      <style>{
          `
            .box {
                width: 300px;
                height: 300px;
                background: #ccc;
                border: 2px solid #000;
            }
            .affix {
              position: fixed;
              left: 0;
              top: 100px;
              width: 100px;
              background: red;
              font: 20px/40px "宋体";
              text-align: center;
              color: #fff;
            }
          `
      }</style>
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
      <div className="box">4</div>
      <div className="box">5</div>
      <div className="box">6</div>
      <div className="box">7</div>
      <div className="box">8</div>
      <div className="box">9</div>
      <span 
        className="affix"
        onClick={()=>{
          setScroll(0);
        }}
      >{scroll}</span>
  </div>);
}
export default App;
