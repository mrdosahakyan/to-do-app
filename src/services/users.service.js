import { db } from "../firebaseConfig";

// export function pushUsers(userName) {
//     const ref = db.ref('users')

//     ref.push({
//         name: userName,

//     })
// }

export function getUsers() {
  const listUsers = [];
  return new Promise((resolve) => {
    db.ref("/users/").once("value", (snapshot) => {
      snapshot.forEach((user) => {
        const userInfo = {
          name: user.val().name,
          id: user.key,
          todos: [],
        };
        user.child("todos").forEach((todo) => {
          userInfo.todos.push({
            id: todo.key,
            title: todo.val().title,
            status: todo.val().status,
          });
        });

        listUsers.push(userInfo);
      });
      resolve(listUsers);
    });
  });
}
