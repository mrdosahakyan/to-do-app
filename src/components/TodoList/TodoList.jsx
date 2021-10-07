import "./TodoList.scss";
import TodoListItem from "../TodoListItem/TodoListItem";
import { editTodo } from "../../services/todos.service";
import { getUsers } from "../../services/users.service";
import { STATUS } from "../../constants/status";

const TodoList = ({ userId, setUsers, todos }) => {
  const handleCompleteTodo = (userId, todoId) => {
    editTodo(userId, todoId);
    getUsers().then((res) => setUsers(res));
  };

  return (
    <div className="todoList">
      {todos
        .filter((todo) => todo.status === STATUS.COMPLETED)
        .map((todo) => {
          return (
            <TodoListItem
              id={todo.id}
              status={todo.status}
              title={todo.title}
              handleClick={() => handleCompleteTodo(userId, todo.id)}
            />
          );
        })}

      {todos
        .filter((todo) => todo.status === STATUS.PENDING)
        .map((todo) => {
          return (
            <TodoListItem
              id={todo.id}
              status={todo.status}
              title={todo.title}
              handleClick={() => handleCompleteTodo(userId, todo.id)}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
