import { useEffect, useState, createContext } from "react";
import cn from "classnames";
import "./UsersTable.scss";
import TodoManager from "../TodoManager/TodoManager";
import {
  countCompletionRate,
  findUserName,
  findUserTodos,
} from "../../helpers/utils";
import { getUsers } from "../../services/users.service";

export const CurrentUserContext = createContext();
export const SetUsersContext = createContext();

const UsersTable = () => {
  const [users, setUsers] = useState();
  const [currUserId, setCurrUserId] = useState();

  const handleRowClick = (id) => {
    setCurrUserId(id);
  };

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  return (
    <CurrentUserContext.Provider value={[currUserId, setCurrUserId]}>
      <SetUsersContext.Provider value={setUsers}>
        <div className={cn("usersTable", { "usersTable-small": currUserId })}>
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

          {currUserId && (
            <TodoManager
              todos={findUserTodos(users, currUserId)}
              userName={findUserName(users, currUserId)}
            />
          )}
        </div>
      </SetUsersContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default UsersTable;
