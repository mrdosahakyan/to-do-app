import "./UsersTable.scss";
import {
  countCompletionRate,
  findUserName,
  findUserTodos,
} from "../../helpers/utils";
import { useEffect, useState } from "react";
import TodoManager from "../TodoManager/TodoManager";
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
    <div style={showTodoManager ? {width:'600px'} : {width:'inherit'}} className= "usersTable">
      <div className="usersTable_header">
        <span className="tableItem">Name</span>
        <span className="tableItem">Completion rate (%)</span>
      </div>
      {users &&
        users.map((user) => {
          return (
            <div
              className={currUserId === user.id ? "usersTable_row activeRow" : "usersTable_row"} 
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
