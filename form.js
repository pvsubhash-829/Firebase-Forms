import { collection, getDocs } from "firebase/firestore";
import { db } from "./index.js";

const querySnapshot = await getDocs(collection(db, "Sales forms"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
