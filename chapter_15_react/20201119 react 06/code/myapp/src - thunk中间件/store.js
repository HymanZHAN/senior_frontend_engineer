import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"; // 实现异步action
const count = (count = 1,action)=>{
    switch (action.type) {
        case "COUNT_PLUS":
          return count + 1
      }
    return count;
};
// 在不同 reducer 函数中，action.type 不能重名 
const todos = (todos = [],action)=>{
    switch (action.type) {
      case "TODOS_PLUS":
        return [
          ...todos,
          action.newTodo
        ]
      case "TODOS_REMOVE":
          return todos.filter(item=>item.id!==action.id);
    }
    return todos;
};
const info = (info = {
  loading: true,
  info: ""
},action)=>{
  switch (action.type) {
    case "INFO_LOAD":
      return {
        loading: false,
        info: action.info
      }
    case "INFO_LOADING":
      return {
        loading: true,
        info: ""
      }
  }
  return info;
};

const store = createStore(combineReducers({
  count,
  todos,
  info
}),applyMiddleware(thunk));
export default store;