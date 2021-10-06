import { useState } from "react";
import { addTodo } from "../../services/todos.service";
import "./TodoForm.scss";

const TodoForm = ({ userId, show }) => {
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleSaveTodoClick = (userId, title) => {
    addTodo(userId, title);
    setInputValue("");
    setShowInput(false);
  };

  const handleAddTodoClick = () => {
    setShowInput(true);
  };
  const handleCloseBtn = () => {
    show(false);
  };

  return (
    <div>
      {showInput ? (
        <form onSubmit={() => handleSaveTodoClick(userId, inputValue)}>
          <input
            required
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Save Todo</button>
        </form>
      ) : (
        <button onClick={handleAddTodoClick}>Add Todo</button>
      )}
      <button onClick={handleCloseBtn}>X</button>
    </div>
  );
};

export default TodoForm;
