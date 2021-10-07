import "./TodoManager.scss";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoManager = ({ todos, userName }) => {
  return (
    <div className="todoManager">
      <TodoForm />
      <h1>To-do list for {userName}</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoManager;
