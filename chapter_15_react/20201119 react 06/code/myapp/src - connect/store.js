import {createStore} from "redux";
const reducer = (state={
  count: 1,
  name: "开课吧"
},action)=>{
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        count: state.count + 1,
      }
  }
  return state;
};
const store = createStore(reducer);
export default store;