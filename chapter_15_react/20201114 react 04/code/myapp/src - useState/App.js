import { useState } from "react";

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
        
*/
// function App() {
//   const [count,setCount] = useState(1);//在组件中声明一个状态
//   const [name,setName] = useState("小瑞瑞");
//   console.log("render");
//   return ( <div className="App">
//       <input 
//         type="text" 
//         value={name}
//         onChange={({target})=>{
//            setName(target.value); 
//         }}
//       />
//       <p>{name}</p>
//       <p>{count}</p>
//       <button onClick={()=>{
//           setCount(count + 1);
//           setName("小瑞瑞长成了钟阿姨")
//           console.log("set");
//       }}>递增</button>
//   </div>);
// }
function App() {
  const [state,setState] = useState({
    name: "小瑞瑞",
    count: 1
  });
  const {name,count} = state;
  return ( <div className="App">
      <input 
        type="text" 
        value={name}
        onChange={({target})=>{
          setState({
            name:target.value,
            count
          }); 
        }}
      />
      <p>{name}</p>
      <p>{count}</p>
      <button onClick={()=>{
          setState({
            name,
            count: count+1
          });
      }}>递增</button>
  </div>);
}

export default App;
