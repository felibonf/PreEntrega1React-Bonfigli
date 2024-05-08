/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";

export const ItemDetail = ({ name, description, price, image, category }) => {
  const handleOnClick = () => {
    console.log("click");
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
          <Link className={styles.card_agregar} to="#" onClick={handleOnClick}>
            Agregar al carrito
          </Link>
        </div>
      </div>
    </div>
  );
};
