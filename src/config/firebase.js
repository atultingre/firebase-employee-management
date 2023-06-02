import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUvyL9JqXCGefJbpXLvfI1c4ZYYJVUsug",
  authDomain: "employee-database-31daa.firebaseapp.com",
  projectId: "employee-database-31daa",
  storageBucket: "employee-database-31daa.appspot.com",
  messagingSenderId: "166497329798",
  appId: "1:166497329798:web:59342dfbd3d0a81232e707",
  measurementId: "G-L9T6RXC3S3",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
