import { useEffect, useState } from "react";
function Child() {
  const [count,setCount] = useState(1);//在组件中声明一个状态
  const [name,setName] = useState("小瑞瑞");
  
  //挂载完成及更新完都要做某件事
  useEffect(()=>{
    console.log("挂载完成及更新完都要做某件事");
  })
  
  // 组件挂载完成之后，要做某些事情
  useEffect(()=>{
    console.log("组件挂载完成之后");
    return ()=>{
      // 即将卸载前要做某些事情
      console.log("组件即将卸载");
    }
  },[]);

  // 组件更新完成之后，要做某些事情，待完善
  useEffect(()=>{
    return ()=>{
      console.log("count有更新或即将卸载时");
    }
  },[count]);
  return ( <div id="App">
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