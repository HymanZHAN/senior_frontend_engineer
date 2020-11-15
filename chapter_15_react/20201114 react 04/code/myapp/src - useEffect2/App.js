import { useState } from "react";
import Child from "./child";

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
         类似于 componentDidMount、componentDidUpdate 和 componentWillUnmount 的集合体
         useEffect(()=>{
            //副作用函数
            return ()=>{
              //副作用函数的返回函数
            }
         },[依赖参数]);
         副作用函数：
          1. 当 useEffect 没有依赖参数时，副作用函数，会在组件挂载完成及组件更新完成时执行
          2. 当有依赖参数副作用函数，会在组件挂载完成及该依赖参数修改，引起的组件更新完成之后执行
          3. 当依赖参数为空数组时，会在组件挂载完成之后执行
         返回函数：
            当组件更新完成，或即将卸载时执行，一般返回函数用在即将卸载时

*/



function App() {
  const [show,setShow] = useState(true);
  return ( <div className="App">
      {show?<Child />:""}
      <button onClick={()=>{
          setShow(!show);
      }}>显示</button>
  </div>);
}
export default App;
