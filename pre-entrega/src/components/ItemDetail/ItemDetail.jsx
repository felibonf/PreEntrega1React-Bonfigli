/* eslint-disable react/prop-types */
/*import { Link } from "react-router-dom";*/
import styles from "./ItemDetail.module.css";
import { useCartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = (item) => {
  const { name, description, price, category, image } = item;

  const { addToCart } = useCartContext();

  const handlleAddToCart = (cantItems) => {
    addToCart(item, cantItems);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.card_img}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.card_content}>
          <h2 className={styles.card_title}>{name}</h2>
          <p className={styles.card_category}>{category}</p>
          <p className={styles.card_description}>{description}</p>
          <p className={styles.card_price}>
            <span>$</span>
            {price}
          </p>
          <div className={styles.card_count}>
            <ItemCount initial={1} handlleAddToCart={handlleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};
