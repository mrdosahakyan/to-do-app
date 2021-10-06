import { useEffect, useState } from "react";
import { getTodos } from "../../services/todos.service";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./TodoManager";

const TodoManager = ({setTodos, todos, userId, userName, show }) => {



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
