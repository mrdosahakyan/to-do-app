import { useEffect, useState } from "react";
import { editTodo, getTodos } from "../../services/todos.service";
import "./TodoList.scss";

const TodoList = ({ userId, setTodos, todos }) => {
  const handleCompleteTodo = (userId, todoId) => {
    editTodo(userId, todoId);
    getTodos(userId).then((res) => setTodos(res));
  };

  return (
    <div>
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span>{todo.status}</span>
                <p>{todo.title}</p>
                <button onClick={() => handleCompleteTodo(userId, todo.id)}>
                  mark us done
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
