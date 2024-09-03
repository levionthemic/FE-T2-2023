import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo, undoTodo } from "../../actions/todos";
// import "./Todo.css"

function TodoList() {
  const todoList = useSelector((state) => state.todosReducer);

  const dispatch = useDispatch();

  const handleCompleted = (id) => {
    console.log(id);
    dispatch(completedTodo(id));
  };

  const handleUndo = (id) => {
    dispatch(undoTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todoList && (
        <ul className="todo__list">
          {todoList.map((item) => (
            <li className="todo__item" key={item.id}>
              <span
                className={
                  "todo__content " +
                  (item.completed && "todo__content--completed")
                }
              >
                {item.content}
              </span>
              {item.completed ? (
                <button onClick={() => handleUndo(item.id)}>U</button>
              ) : (
                <button onClick={() => handleCompleted(item.id)}>V</button>
              )}
              <button onClick={() => handleDelete(item.id)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
