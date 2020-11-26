import { useDispatch } from "react-redux";

function Todo(props) {
  const { data } = props;
  const dispatch = useDispatch();
  return (
    <li>
      {data.todo} ---{" "}
      <a
        onClick={() => {
          dispatch({
            type: "TODOS_REMOVE",
            id: data.id,
          });
        }}
      >
        删除
      </a>
    </li>
  );
}
export default Todo;
