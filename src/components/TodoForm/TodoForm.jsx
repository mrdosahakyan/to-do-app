import { useState, useContext } from "react";
import { MdAdd, MdOutlineClose, MdDone } from "react-icons/md";
import "./TodoForm.scss";
import { addTodo } from "../../services/todos.service";
import { getUsers } from "../../services/users.service";
import { CurrentUserContext, SetUsersContext } from "../UsersTable/UsersTable";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [currUserId, setCurrUserId] = useContext(CurrentUserContext);
  const setUsers = useContext(SetUsersContext);

  const handleSaveTodoClick = (userId, title) => {
    addTodo(userId, title);
    getUsers().then((res) => setUsers(res));
    setInputValue("");
    setShowInput(false);
  };

  const handleAddTodoClick = () => {
    setShowInput(true);
  };

  const handleCloseBtn = () => {
    setCurrUserId("");
  };

  return (
    <div className="todoForm">
      {showInput ? (
        <form onSubmit={() => handleSaveTodoClick(currUserId, inputValue)}>
          <input
            required
            placeholder="New to-do description"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="todoForm-addBtn" type="submit">
            <MdDone />
          </button>
        </form>
      ) : (
        <button className="todoForm-addBtn" onClick={handleAddTodoClick}>
          <MdAdd />
        </button>
      )}
      <button className="todoForm-closeBtn" onClick={handleCloseBtn}>
        <MdOutlineClose />
      </button>
    </div>
  );
};

export default TodoForm;
