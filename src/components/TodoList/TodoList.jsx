import { editTodo } from "../../services/todos.service";
import { getUsers } from "../../services/users.service";
import "./TodoList.scss";
import { MdDone, MdAvTimer } from "react-icons/md";
import { STATUS } from "../../constants/status";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ userId, setUsers, todos }) => {
  const handleCompleteTodo = (userId, todoId) => {
    editTodo(userId, todoId);
    getUsers().then((res) => setUsers(res));
  };

  return (
    <div className="todoList">
      {todos &&
        todos
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

      {todos &&
        todos
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
