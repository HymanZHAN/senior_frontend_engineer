import { Component } from "react";
import Todo from "./todo";
class Todos extends Component {
  render() {
    const {data,removeTodo} = this.props;
    return <ul id="todo-list">
      {data.map((item,index)=>{
        return <Todo 
            key={index}
            data={item}
            removeTodo={removeTodo}
        />
      })}
    </ul>
  }
}

export default Todos;