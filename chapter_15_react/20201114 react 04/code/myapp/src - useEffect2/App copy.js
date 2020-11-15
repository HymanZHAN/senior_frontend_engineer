import { Component, useState } from "react";

/*
  hook(钩子) 钩子函数
  使函数组件拥有类组件相似的功能

  内置常用 hook：
    1. useState 在组件中声明一个状态
       const [state,setState] = useState(initState)
       initState 状态的初始值
       state 状态
       setState 修改该状态的方法
          1. 还是一个异步方法，多次修改状态，只执行一次更新
          2. 当 state 为引用类型，修改时注意要合并其他值
    2. useEffect 副作用
        
*/
// function App() {
//   const [count,setCount] = useState(1);
//   // setTimeout(() => {
//   //     setCount(count+1);
//   // }, 30);
//   // requestAnimationFrame(()=>{
//   //   setCount(count + 1);
//   // })
//   return ( <div className="App">
//       <p>{count}</p>
//   </div>);
// }


class App extends Component {
  componentDidMount(){
    console.log("请求数据");
  }
  componentDidUpdate(){
    console.log("请求数据")
  }
  getSnapshotBeforeUpdate(){
    // 获取更新前得DOM快照
    return "";
  }
  render(){
    return <div></div>
  }
}


// function App() {
//   const [count,setCount] = useState(1);
//   return ( <div className="App">
//       <p>{count}</p>
//   </div>);
// }
export default App;
