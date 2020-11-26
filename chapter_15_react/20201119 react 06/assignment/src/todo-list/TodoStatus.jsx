import { useDispatch, useSelector } from "react-redux";

export function TodoStatus() {
  const dispatch = useDispatch();
  const doneTodos = useSelector((state) => state.filter((item) => item.done));
  const unfinishedTodos = useSelector((state) =>
    state.filter((item) => !item.done)
  );

  return (
    <div id="todo-stats">
      <span className="todo-count">
        <span className="number">{unfinishedTodos.length}</span>
        <span className="word">项待完成</span>
      </span>
      <span className="todo-clear">
        <button
          disabled={doneTodos.length === 0}
          onClick={() => {
            const doneTodoIds = doneTodos.map((item) => item.id);
            doneTodoIds.forEach((id) => {
              dispatch({ type: "TODOS_DESTROY", id });
            });
          }}
        >
          Clear <span>{doneTodos.length}</span> 已完成事项
        </button>
      </span>
    </div>
  );
}

export default TodoStatus;
