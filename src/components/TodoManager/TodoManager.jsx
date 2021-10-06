import { useEffect, useState } from "react";
import { getTodos } from "../../services/todos.service";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./TodoManager";

const TodoManager = ({ userId, userName, show }) => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    getTodos(userId).then((res) => {
      setTodos(res);
      console.log("get todos");
    });
  }, [userId]);

  //   console.log(userId);
  return (
    <div>
      <TodoForm setTodos={setTodos} userId={userId} show={show} />
      <h1>hello {userName}</h1>
      <TodoList setTodos={setTodos} todos={todos} userId={userId} />
    </div>
  );
};

export default TodoManager;
