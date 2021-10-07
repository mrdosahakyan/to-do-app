import "./TodoListItem.scss";
import { MdDone, MdAvTimer } from "react-icons/md";
import { STATUS } from "../../constants/status";

const TodoListItem = ({ id, status, title, handleClick }) => {
  const complete = status === STATUS.PENDING;
  return (
    <div key={id} className="todoList_item">
      <div>
        <span
          className={
            complete
              ? "todoList_item_status-pending"
              : "todoList_item_status-completed"
          }
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
        onClick={handleClick}
        className={
          complete ? "todoList_item_enableBtn" : "todoList_item_disableBtn"
        }
      >
        Mark us done
      </button>
    </div>
  );
};

export default TodoListItem;
