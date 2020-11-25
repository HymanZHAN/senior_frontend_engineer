import {createStore, combineReducers} from "redux";

// const reducer = (state={
//   count: 1,
//   todos:[]
// },action)=>{
//   switch (action.type) {
//     case "PLUS":
//       return {
//         ...state,
//         count: state.count + 1,
//       }
//   }
//   return state;
// };

// reducer 拆分
// const reducer = (state={},action)=>{
//   return {
//     count: count(state.count,action),
//     todos: todos(state.todos,action)
//   };
// };

const count = (count = 1,action)=>{
    switch (action.type) {
        case "PLUS":
          return count + 1
      }
    return count;
};

const todos = (todos = [],action)=>{
    return todos;
};
// reducer 的合并
// const reducer = combineReducers({
//   count: count,
//   todos: todos
// });
const reducer = combineReducers({
  count,
  todos
});

console.log(reducer);

const store = createStore(reducer);
export default store;