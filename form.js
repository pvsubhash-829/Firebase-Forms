import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { db } from "./index.js";

const querySnapshot = await getDocs(collection(db, "Sales forms"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data().Name}`);
});
