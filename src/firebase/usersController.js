import { getAuth, signInWithEmailAndPassword, deleteUser} from "firebase/auth";
import {app} from "./index"
const auth = getAuth();

export const deleteTestUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      deleteUser(user).then(()=> console.log("user eliminado"))
    })
    .catch((err) => {
      const errorCode =err.code;
      const errorMessage = err.message
    });
};
