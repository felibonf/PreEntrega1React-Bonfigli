import styles from "./ItemListContainer.module.css";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { getProducts, getProductsByCategory } from "../../utils/MockData";
// eslint-disable-next-line no-unused-vars
import { Spinner } from "../Navbar/Layouts/Spinner/Spinner";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/dbConnection";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  // const greeting = "Bienvenido a perfumerias Marovi!";
  // const defaultTitle = "Defaul Title";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productsCollection = collection(db, "products");

    if (categoryId) {
      const cons = query(
        productsCollection,
        where("category", "array-contains", categoryId)
      );

      getDocs(cons)
        .then(({ docs }) => {
          const prodFromDocs = docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setProducts(prodFromDocs);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDocs(productsCollection)
        .then(({ docs }) => {
          const prodFromDocs = docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setProducts(prodFromDocs);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoryId]);

  /*
    if (categoryId) {
      getProductsByCategory(categoryId).then((res) => {
        setProducts(res);
        setLoading(false);
      });
    } else {
      getProducts()
        .then((res) => {
          setProducts(res);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }*/

  return (
    <main className={styles.main}>
      {loading === true ? <Spinner /> : <ItemList productsList={products} />}
    </main>
  );
};
