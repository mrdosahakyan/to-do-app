import { editTodo } from "../../services/todos.service";
import { getUsers } from "../../services/users.service";
import "./TodoList.scss";

const TodoList = ({ userId, setUsers, todos }) => {
  const handleCompleteTodo = (userId, todoId) => {
    editTodo(userId, todoId);
    getUsers().then((res) => setUsers(res));
  };

  return (
    <div>
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span>{todo.status}</span>
                <p>{todo.title}</p>
                <button onClick={() => handleCompleteTodo(userId, todo.id)}>
                  mark us done
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
