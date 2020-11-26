import { useState } from "react";
import { useDispatch } from "react-redux";

export function TodoInput(props) {
  const dispatch = useDispatch();

  let [content, setContent] = useState("");
  return (
    <div id="create-todo">
      <input
        id="new-todo"
        placeholder="What needs to be done?"
        autoComplete="off"
        type="text"
        value={content}
        onInput={({ target }) => setContent(target.value)}
        onKeyUp={(e) => {
          if (e.code === "Enter" && content) {
            dispatch({
              type: "TODOS_ADD",
              item: {
                id: Date.now(),
                content,
                done: false,
              },
            });
            setContent("");
          }
        }}
      />
    </div>
  );
}

export default TodoInput;
