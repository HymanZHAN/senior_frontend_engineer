import ReactDOM from "react-dom";
import {createStore} from "redux";

const reducer = (state={
  count: 1
},action)=>{
  switch (action.type) {
    case "PLUS":
      return {
        count: state.count + 1
      }
  }
  return state;
};
const store = createStore(reducer);
store.subscribe(()=>{
  render();
})
render();


function render() {
    ReactDOM.render(<div>
        <p>{store.getState().count}</p>
        <button onClick={()=>{
            store.dispatch({
              type: "PLUS"
            })
        }}>递增</button>
    </div>,document.querySelector("#root"))
}
