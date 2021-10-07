import { editTodo } from "../../services/todos.service";
import { getUsers } from "../../services/users.service";
import "./TodoList.scss";
import { MdDone, MdAvTimer } from 'react-icons/md'


const TodoList = ({ userId, setUsers, todos }) => {
  const handleCompleteTodo = (userId, todoId) => {
    editTodo(userId, todoId);
    getUsers().then((res) => setUsers(res));
  };

  return (
    <div className="todoList">
      {todos &&
        todos.map((todo) => {
          const completed = todo.status === "incomplete";
          return (
            <div key={todo.id} className="todoList_item">
              <div>
                <span
                  className={
                    completed
                      ? "todoList_item_status-pending"
                      : "todoList_item_status-completed"
                  }
                >
                  {completed ? <> <MdAvTimer/> Pending </> : <> <MdDone/> Completed </>}
                </span>
                <p className="todoList_item_title">{todo.title}</p>
              </div>
              <button
                disabled={!completed}
                onClick={() => handleCompleteTodo(userId, todo.id)}
                className={
                  completed
                    ? "todoList_item_enableBtn"
                    : "todoList_item_disableBtn"
                }
              >
                Mark us done
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
