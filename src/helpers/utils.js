export const countCompletionRate = (arr = []) => {
  const allTodos = arr.length;
  const completedTodos = arr.filter((el) => el.status === "complete").length;
  return allTodos ? Math.round((completedTodos / allTodos) * 100) : 0;
};

export const findUser = (users, id) => {
  return users.find((user) => user.id === id);
};
