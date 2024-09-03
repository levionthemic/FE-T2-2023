import { useSelector } from "react-redux";

function TodoList() {
  const todoList = useSelector((state) => state.todosReducer);

  return (
    <>
      {todoList && (
        <ul className="todo__list">
          {todoList.map((item) => (
            <li className="todo__item" key={item.id}>
              <span>{item.content}</span>
              <button>V</button>
              <button>X</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
