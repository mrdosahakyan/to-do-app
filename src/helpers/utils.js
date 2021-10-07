import { STATUS } from "../constants/status";

export const countCompletionRate = (arr = []) => {
  const allTodos = arr.length;
  const completedTodos = arr.filter((el) => el.status === STATUS.COMPLETED).length;
  return allTodos ? Math.round((completedTodos / allTodos) * 100) : 0;
};

export function findUserTodos(users, userId) {
  return users.find((user) => user.id === userId).todos;
}

export const findUserName = (users, id) => {
  return users.find((user) => user.id === id).name;
};
