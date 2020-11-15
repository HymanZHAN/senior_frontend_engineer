import { useEffect, useRef, useState } from "react";
/*
  useRef：
    1. 作用和用法类似于 createRef
    2. useRef 除了可以获取节点实例(真实DOM或组件实例) 之外，还可以跨组件更新阶段传递信息
      1. 当 ref 中保存的是数据时，组件更新之后，ref中保存的值，并不会跟随更新，需要我们手动更新
*/
function Child() {
  const [count,setCount] = useState(1);//在组件中声明一个状态
  const [name,setName] = useState("小瑞瑞");
  const app = useRef();
  const prevCount = useRef(count);
  useEffect(()=>{
    console.log(prevCount);
    console.log(app.current.innerHTML);
    prevCount.current = count;
  })
  return ( <div 
    id="App"
    ref={app}
  >
      <input 
        type="text" 
        value={name}
        onChange={({target})=>{
           setName(target.value); 
        }}
      />
      <p>{name}</p>
      <p>{count}</p>
      <button onClick={()=>{
          setCount(count + 1);
      }}>递增</button>
  </div>);
}

export default Child;