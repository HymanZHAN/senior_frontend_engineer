import { Component } from "react";
class Todo extends Component {
  render() {
    const {data,removeTodo} = this.props;
    const {id,text} = data;
    return <li className="">
        <div className="todo ">
          <div className="display">
            <div className="todo-content">{text}</div>
            <span className="todo-destroy"
              onClick={()=>{
                removeTodo(id);
              }}
            ></span>
          </div>
        </div>
      </li>
  }
}

export default Todo;