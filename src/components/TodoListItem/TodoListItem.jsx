import cn from "classnames";
import { MdDone, MdAvTimer } from "react-icons/md";
import "./TodoListItem.scss";
import { STATUS } from "../../constants/status";

const TodoListItem = ({ id, status, title, handleClick }) => {
  const complete = status === STATUS.PENDING;
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
        onClick={handleClick}
        className={cn(
          { 'todoList_item_enableBtn': complete },
          { 'todoList_item_disableBtn': !complete }
        )}
      >
        Mark us done
      </button>
    </div>
  );
};

export default TodoListItem;
