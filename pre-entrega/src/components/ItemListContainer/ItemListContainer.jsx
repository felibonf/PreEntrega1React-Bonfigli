import styles from "./ItemListContainer.module.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../utils/MockData";
// eslint-disable-next-line no-unused-vars
import { useFetch } from "../../Hooks/useFetch";
import { Spinner } from "../Navbar/Layouts/Spinner/Spinner";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  // const greeting = "Bienvenido a perfumerias Marovi!";
  // const defaultTitle = "Defaul Title";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
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
    }
  }, [categoryId]);

  return (
    <main className={styles.main}>
      {loading === true ? <Spinner /> : <ItemList productsList={products} />}
    </main>
  );
};
