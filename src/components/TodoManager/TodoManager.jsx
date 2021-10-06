import { useEffect, useState } from "react";
import { getTodos } from "../../services/todos.service";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./TodoManager";

const TodoManager = ({ todos, userId, userName, show, setUsers }) => {
  return (
    <div>
      <TodoForm setUsers={setUsers} userId={userId} show={show} />
      <h1>hello {userName}</h1>
      <TodoList setUsers={setUsers} todos={todos} userId={userId} />
    </div>
  );
};

export default TodoManager;
