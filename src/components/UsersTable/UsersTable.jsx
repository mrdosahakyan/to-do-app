import { useEffect, useState } from "react";
import cn from "classnames";
import "./UsersTable.scss";
import TodoManager from "../TodoManager/TodoManager";
import {
  countCompletionRate,
  findUserName,
  findUserTodos,
} from "../../helpers/utils";
import { getUsers } from "../../services/users.service";

const UsersTable = () => {
  const [users, setUsers] = useState();
  const [showTodoManager, setShowTodoManager] = useState(false);
  const [currUserId, setCurrUserId] = useState();

  const handleRowClick = (id) => {
    setShowTodoManager(true);
    setCurrUserId(id);
  };

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  return (
    <>
      <div
        className={cn("usersTable", { "usersTable-small": showTodoManager })}
      >
        <div className="usersTable_header">
          <span className="tableItem">Name</span>
          <span className="tableItem">Completion rate (%)</span>
        </div>
        {users &&
          users.map((user) => {
            return (
              <div
                className={cn("usersTable_row", {
                  activeRow: currUserId === user.id,
                })}
                key={user.id}
                onClick={() => handleRowClick(user.id)}
              >
                <span className="tableItem">{user.name}</span>
                <span className="tableItem">
                  {countCompletionRate(user.todos)}
                </span>
              </div>
            );
          })}

        {showTodoManager && (
          <TodoManager
            todos={findUserTodos(users, currUserId)}
            setUsers={setUsers}
            show={setShowTodoManager}
            setCurrUserId={setCurrUserId}
            userId={currUserId}
            userName={findUserName(users, currUserId)}
          />
        )}
      </div>
    </>
  );
};

export default UsersTable;
