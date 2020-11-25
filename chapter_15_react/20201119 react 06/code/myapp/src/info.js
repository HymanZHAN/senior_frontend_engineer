
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInfoData } from "./action";

/*
    redux 使用了 thunk 中间件后，dispatch 可以接收两种不同类型的参数（action）
    1. 普通对象，该 action 还是跟之前一样，调用 dispatch 会直接 调用 reducer 函数，将 action 传递给 redux 修改 state
    2. 函数：当 action 是个函数时， dispatch 会 执行该函数，并且将 getState 和 dispatch 传递给该函数

    对象形式action： dispatch --> reducer 
    函数形式action： dispatch --> 函数(中间件) --> dispatch --> reducer
*/
function Info() {
  const info = useSelector(state=>state.info);
  const getInfoData = useInfoData();
  useEffect(()=>{
    getInfoData();
  },[]);
  return <h2>{info.loading?"数据请求中……":info.info}</h2>
}

export default Info;