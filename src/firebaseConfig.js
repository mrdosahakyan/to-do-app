
import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyCEwOCeM6rn0maQgs4lopeNVkFyLpatdO8",
  authDomain: "todo-ultralabs-cd88a.firebaseapp.com",
  databaseURL: "https://todo-ultralabs-cd88a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-ultralabs-cd88a",
  storageBucket: "todo-ultralabs-cd88a.appspot.com",
  messagingSenderId: "307529053222",
  appId: "1:307529053222:web:addee3313e6d55d9e1e2e7"
};



export default  firebase.initializeApp(firebaseConfig);

export const db = firebase.database()




