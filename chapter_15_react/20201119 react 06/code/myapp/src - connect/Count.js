import {connect} from "react-redux";
/*
  在组件中 获取 state 和 dispatch：
  1. connect （类组件和函数组件）
*/
function Count(props) {
  console.log(props);
  return <div>
      
  </div>
}
/*
  connect 高阶函数
  connect的返回值 -- 高阶组件类似于  withRouter
*/
// const NewCount = connect(state=>{
//   console.log(state);
//   return {
//     count: state.count
//   } // connect 回调函数的返回值，必须返回一个对象
// }); // 获取到全部 state 之后，从这些 state 中，提取我们想要的部分
// // 调用 connect 的返回值，并将需要获取 state 的组件，传递给 该函数，该函数会返回一个新的组件。调用该组件，该组件内容会调用我们传递进去的组件，并且将 connect 节选出 state 和 dispatch 方法 传递给组件。
// const NewCount2 = NewCount(Count);
export default connect(state=>({count:state.count}))(Count);