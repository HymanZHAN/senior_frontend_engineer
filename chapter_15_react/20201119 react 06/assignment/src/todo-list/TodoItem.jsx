import { createRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export function TodoItem(props) {
  const { item } = props;
  const { content, done } = item;
  const dispatch = useDispatch();

  let [isEditing, setIsEditing] = useState(false);
  let [updatedContent, setUpdatedContent] = useState(content);

  const todoInput = createRef();

  useEffect(() => {
    if (isEditing) {
      todoInput.current.focus();
    }
  });

  return (
    <li className={`${isEditing ? "editing" : ""}`}>
      <div className={`todo ${done ? "done" : ""}`}>
        <div className="display">
          <input
            className="check"
            type="checkbox"
            checked={done}
            onChange={({ target }) => {
              dispatch({
                type: "TODOS_UPDATE",
                item: { ...item, done: target.checked },
              });
            }}
          />
          <div
            className="todo-content"
            onDoubleClick={() => {
              setIsEditing(true);
            }}
          >
            {content}
          </div>
          <span
            className="todo-destroy"
            onClick={() => {
              dispatch({ type: "TODOS_DESTROY", id: item.id });
            }}
          ></span>
        </div>
        <div className="edit">
          <input
            ref={todoInput}
            type="text"
            className="todo-input"
            value={updatedContent}
            onChange={({ target }) => {
              setUpdatedContent(target.value);
            }}
            onBlur={() => {
              setIsEditing(false);
              if (updatedContent) {
                dispatch({
                  type: "TODOS_UPDATE",
                  item: {
                    ...item,
                    content: updatedContent,
                  },
                });
              }
            }}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                todoInput.current.blur();
              }
            }}
          />
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
