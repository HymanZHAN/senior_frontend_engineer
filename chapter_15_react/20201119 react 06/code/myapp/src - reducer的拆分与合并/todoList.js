const { default: Todo } = require("./todo");

function TodoList() {
  return <ul>
        <Todo />
        <Todo />
        <Todo />
  </ul>
}
export default TodoList