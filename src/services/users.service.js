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
      snapshot.forEach((el) => {
        listUsers.push({
          name: el.val().name,
          id: el.key,
        });
      });
      resolve(listUsers);
    });
  });
}
