import "./TodoList.scss";
import TodoListItem from "../TodoListItem/TodoListItem";
import { STATUS } from "../../constants/status";

const TodoList = ({ todos }) => {
  return (
    <div className="todoList">
      {todos
        .filter((todo) => todo.status === STATUS.COMPLETED)
        .map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              status={todo.status}
              title={todo.title}
            />
          );
        })}

      {todos
        .filter((todo) => todo.status === STATUS.PENDING)
        .map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              status={todo.status}
              title={todo.title}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
