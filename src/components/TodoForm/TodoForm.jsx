import { useState } from "react";
import { addTodo } from "../../services/todos.service";
import { getUsers } from "../../services/users.service";
import "./TodoForm.scss";

const TodoForm = ({ userId, show, setUsers, setCurrUserId }) => {
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);

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
    show(false);
    setCurrUserId('')
  };

  return (
    <div className='todoForm'>
      {showInput ? (
        <form onSubmit={() => handleSaveTodoClick(userId, inputValue)}>
          <input
            required
            placeholder='New to-do description'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='todoForm-addBtn' type="submit">V</button>
        </form>
      ) : (
        <button className='todoForm-addBtn' onClick={handleAddTodoClick}> + </button>
      )}
      <button className='todoForm-closeBtn' onClick={handleCloseBtn}>X</button>
    </div>
  );
};

export default TodoForm;
