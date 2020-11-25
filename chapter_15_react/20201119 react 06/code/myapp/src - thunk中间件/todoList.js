import { useSelector, useStore } from "react-redux";

const { default: Todo } = require("./todo");

function TodoList() {
  const todos = useSelector(state=>state.todos);
  return <ul>
        {todos.map(item=>{
          return <Todo 
              key={item.id}
              data={item}
          />
        })}
  </ul>
}
export default TodoList