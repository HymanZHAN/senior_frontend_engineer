import { Component } from "react";

class Todo extends Component {
  /*
      在 React 中，父组件更新，会引起所有的子组件一块更新。
  */
  shouldComponentUpdate(nextProps,nextState){
    // console.log("重新渲染了",nextProps.data.id);
    if(
      this.props.data.done !== nextProps.data.done
      || this.props.data.todo !== nextProps.data.todo
    ){
      return true;
    }
    return false;
  }
  render(){
    const {data,removeTodo,changeDone} = this.props;
    const {id,done,todo} = data;
    console.log(id,"更新了");
    return <li className="">
      <div className={"todo "+(done?"done":"")}>
        <div className="display">
          <input 
            className="check" 
            type="checkbox" 
            checked={done}
            onChange={({target})=>{
                changeDone(id,target.checked);
            }}
          />
          <div className="todo-content">{todo}</div>
          <span className="todo-destroy"
            onClick={()=>{
              removeTodo(id);
            }}
          ></span>
        </div>
        <div className="edit">
          <input 
            className="todo-input" 
            type="text" 
          />
        </div>
      </div>
    </li>
  }
  
}

export default Todo;