import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/dbConnection";

import { products } from "./MockData";

export const importProductsFromMock = () => {
  const productsCollection = collection(db, "products");

  products.forEach((product) => {
    addDoc(productsCollection, product)
      .then((doc) => {
        console.log("Document written with ID: ", doc.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  });
};
