import { useDispatch } from "react-redux";
import TodoList from "./todoList";

function Todos() {
  const dispatch = useDispatch();
  return (
    <div>
      <TodoList />
      <button
        onClick={() => {
          dispatch({
            type: "TODOS_PLUS",
            newTodo: {
              id: Date.now(),
              todo: "这是新的todo" + Date.now(),
            },
          });
        }}
      >
        添加todo
      </button>
    </div>
  );
}
export default Todos;
