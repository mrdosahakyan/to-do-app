import { db } from "../firebaseConfig";

export function addTodo(id, title) {
  const ref = db.ref("/users/" + id + "/todos");
  ref.push({
    title,
    status: "incomplete",
  });
}

export function getTodos(userId) {
  const userTodos = [];
  return new Promise((resolve) => {
    const ref = db.ref("/users/" + userId + "/todos");
    ref.once("value", (snapshot) => {
      snapshot.forEach((el) => {
        userTodos.push({
          title: el.val().title,
          id: el.key,
          status: el.val().status,
        });
      });
      resolve(userTodos);
    });
  });
}

export function editTodo(userId, todoId) {
  const ref = db.ref("/users/" + userId + "/todos");
  ref.child(todoId).update({
    status: "complete",
  });
}
