import { db } from "../firebaseConfig";

export function addTodo(userId, title) {
  const ref = db.ref("/users/" + userId + "/todos");
  ref.push({
    title,
    status: "incomplete",
  });
}

export function editTodo(userId, todoId) {
  const ref = db.ref("/users/" + userId + "/todos");
  ref.child(todoId).update({
    status: "complete",
  });
}
