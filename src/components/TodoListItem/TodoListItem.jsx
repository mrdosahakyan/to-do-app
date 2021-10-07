import { useContext } from "react";
import cn from "classnames";
import { MdDone, MdAvTimer } from "react-icons/md";
import "./TodoListItem.scss";
import { STATUS } from "../../constants/status";
import { editTodo } from "../../services/todos.service";
import { getUsers } from "../../services/users.service";
import { CurrentUserContext, SetUsersContext } from "../UsersTable/UsersTable";

const TodoListItem = ({ id, status, title }) => {
  const [currUserId] = useContext(CurrentUserContext);
  const setUsers = useContext(SetUsersContext);

  const complete = status === STATUS.PENDING;

  const handleCompleteTodo = (userId, todoId) => {
    editTodo(userId, todoId);
    getUsers().then((res) => setUsers(res));
  };

  return (
    <div key={id} className="todoList_item">
      <div>
        <span
          className={cn(
            { "todoList_item_status-pending": complete },
            { "todoList_item_status-completed": !complete }
          )}
        >
          {complete ? (
            <>
              <MdAvTimer /> Pending
            </>
          ) : (
            <>
              <MdDone /> Completed
            </>
          )}
        </span>
        <p className="todoList_item_title">{title}</p>
      </div>
      <button
        disabled={!complete}
        onClick={() => handleCompleteTodo(currUserId, id)}
        className={cn(
          { todoList_item_enableBtn: complete },
          { todoList_item_disableBtn: !complete }
        )}
      >
        Mark us done
      </button>
    </div>
  );
};

export default TodoListItem;
