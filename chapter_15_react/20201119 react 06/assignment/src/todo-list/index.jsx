//暗号：无敌凯爷

import { useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoStatus from "./TodoStatus";

export function TodoList() {
  const todos = useSelector((state) => state);

  return (
    <div id="todoapp">
      <div className="title">
        <h1>todo</h1>
      </div>
      <div className="content">
        <TodoInput />
        <ul id="todo-list">
          {todos.map((todo) => {
            return <TodoItem key={todo.id} item={todo} />;
          })}
        </ul>
        <TodoStatus />
      </div>
    </div>
  );
}

export default TodoList;
