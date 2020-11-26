import { createStore } from "redux";

const todos = (todos = [], action) => {
  switch (action.type) {
    case "TODOS_ADD":
      return [...todos, action.item];
    case "TODOS_UPDATE":
      return todos.map((item) => {
        if (item.id === action.item.id) {
          return {
            ...item,
            content: action.item.content,
            done: action.item.done,
          };
        }
        return item;
      });
    case "TODOS_DESTROY":
      return todos.filter((item) => item.id !== action.id);
    default:
      return todos;
  }
};

export const store = createStore(todos, [
  { id: 1, content: "Test Todo Item 1", done: false },
]);

export default store;
