import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./TodoManager.scss";

const TodoManager = ({ todos, userId, userName, show, setUsers, setCurrUserId }) => {
  return (
    <div className='todoManager'>
      <TodoForm setCurrUserId={setCurrUserId} setUsers={setUsers} userId={userId} show={show} />
      <h1>To-do list for {userName}</h1>
      <TodoList setUsers={setUsers} todos={todos} userId={userId} />
    </div>
  );
};

export default TodoManager;
