import "./UsersTable.scss";
import { countCompletionRate, findUserName } from "../../helpers/utils";
import { useEffect, useState } from "react";
import TodoManager from "../TodoManager/TodoManager";
import { getUsers } from "../../services/users.service";
import { getTodos } from "../../services/todos.service";

const UsersTable = () => {
  const [users, setUsers] = useState();
  const [showTodoManager, setShowTodoManager] = useState(false);
  const [currUserId, setCurrUserId] = useState();
  const [todos, setTodos] = useState();

  const handleRowClick = (id) => {
    setShowTodoManager(true);
    setCurrUserId(id);
  };
  useEffect(() => {
    getUsers().then((res) => setUsers(res));
    console.log('get users');
  }, [todos]);

  useEffect(() => {
    getTodos(currUserId).then((res) => {
      setTodos(res);
    });
  }, [currUserId]);
  
  return (
    <div className="usersTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Completion rate (%)</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.id} onClick={() => handleRowClick(user.id)}>
                  <td>{user.name}</td>
                  <td>{countCompletionRate(user.todos)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {showTodoManager && (
        <TodoManager
        todos={todos}
        setTodos={setTodos}
          show={setShowTodoManager}
          userId={currUserId}
          userName={findUserName(users, currUserId)}
        />
      )}
    </div>
  );
};

export default UsersTable;
