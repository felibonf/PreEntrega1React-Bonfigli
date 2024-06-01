import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

import { Spinner } from "../Navbar/Layouts/Spinner/Spinner";
import { db } from "../../firebase/dbConnection";
import { collection, doc, getDoc } from "firebase/firestore";
import { getProductById } from "../../utils/MockData";

export const ItemDetailContainer = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    /*
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, prodId);

    getDoc(refDoc)
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data() });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });*/

    getProductById(prodId)
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [prodId]);

  return loading === true ? (
    <Spinner />
  ) : (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};
