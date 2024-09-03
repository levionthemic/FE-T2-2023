import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todos() {
  return (
    <>
      <div className="todo">
        <TodoInput />
        <TodoList />
      </div>
    </>
  );
}

export default Todos;
