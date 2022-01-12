import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
// Initialize Firebase
const initializeFirebaseApp =  () =>{
     initializeApp(firebaseConfig);
}
export default initializeFirebaseApp;