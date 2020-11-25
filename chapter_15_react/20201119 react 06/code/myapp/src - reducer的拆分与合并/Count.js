import {useDispatch, useSelector, useStore} from "react-redux";
/*
useDispatch：获取 store 的 dispatch 方法
useSelector：从 state 获取想要的数据
useStore ：获取 store 对象
*/
function Count() {
  const count = useSelector(state=>state.count);
  const dispatch = useDispatch();
  //console.log(useStore());
  return <div>
      <p>{count}</p>
      <button onClick={()=>{
          dispatch({
              type: "PLUS"
          });
      }}>递增</button>
  </div>
}
export default Count;