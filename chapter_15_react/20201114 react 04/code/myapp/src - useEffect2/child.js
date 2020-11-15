import { useEffect, useRef, useState } from "react";
function Child() {
  const [count,setCount] = useState(1);//在组件中声明一个状态
  const [name,setName] = useState("小瑞瑞");
  const size = useRef();
  const isUpdate = useRef(false);
  // 更新后和挂载后都执行
  useEffect(()=>{
    console.log("更新后和挂载后都执行");
  })
  // 挂载后执行
  useEffect(()=>{
      console.log("挂载后执行");
      size.current.innerHTML = window.innerWidth;
      window.onresize = ()=>{
        size.current.innerHTML = window.innerWidth;
      };
      // 即将卸载执行
      return ()=>{
        console.log("即将卸载执行");
        window.onresize = null;
      }
  },[]);
  // 当更新完成之后执行
  useEffect(()=>{
      //console.log(isUpdate.current);
      if(isUpdate.current){
        console.log("当更新完成之后执行");
      } else {
        isUpdate.current = true;
      }
  });
  return ( <div 
    id="App"
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
      <p ref={size}></p>
      <button onClick={()=>{
          setCount(count + 1);
      }}>递增</button>
  </div>);
}

export default Child;