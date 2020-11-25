import {createStore} from "redux";

/*
1. store 状态容器，提供获取状态和发起状态修改命令，监听状态修改的方法
  - dispatch: ƒ dispatch(action)  发起一个状态修改指令，同步方法
  - getState: ƒ getState() 获取状态
  - replaceReducer: ƒ replaceReducer(nextReducer) 替换掉 reducer 函数 
  - subscribe: ƒ subcaribe(listen) 监听以及取消监听状态的变化
2. reducer 纯函数，根据状态的修改指令，完成状态的修改，并返回修改后的新状态
      纯函数：
        什么是纯函数？
        ###### 纯函数
        1. 相同的输入永远返回相同的输出
        2. 不修改函数的输入值
        3. 不依赖外部环境状态
        4. 无任何副作用（请求等等）
        使用纯函数的好处
        1. 便于测试
        2. 有利重构

3. action 状态修改指令
    1. action 默认是一个普通对象
    2. 该对象必须有 type 属性，type 属性描述是对 state 做什么样的修改
*/


const reducer = (state={
  count: 1
},action)=>{
  //console.log(action);
  switch (action.type) {
    case "PLUS":
      return {
        count: state.count + 1
      }
  }
  return state;
};
const store = createStore(reducer);

//console.log(store);
// console.log(store.getState());
// store.dispatch({
//   type: "PLUS"
// });
// console.log(store.getState());
// store.dispatch({
//   type: "PLUS"
// });
// console.log(store.getState());
store.subscribe(()=>{
  console.log("监听1",store.getState());
});
const unSubscribe = store.subscribe(()=>{
  const {count} = store.getState();
  console.log("监听2",store.getState());
  if(count > 3){
    unSubscribe(); //调用 subscribe 返还函数，可以取消，subscribe 的监听
  }
});
setInterval(() => {
  store.dispatch({
      type: "PLUS"
    });
}, 1000);

