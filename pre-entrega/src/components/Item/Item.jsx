/* eslint-disable react/prop-types */
import styles from "./Item.module.css";
import { Link } from "react-router-dom";

export const Item = ({ id, name, price, image, category }) => {
  const handleOnClick = () => {
    console.log("click");
  };
  return (
    <figure className={styles.figure}>
      <img src={image} alt={name} />
      <div className={styles.cart}>
        {" "}
        <i className={styles.cart_add}></i>
        <span>+ Ver mas</span>
      </div>
      <figcaption>
        <h3>{name}</h3>
        <p>{category}</p>
        <div className={styles.price}>
          <h4>
            <span>$</span>
            {price}
          </h4>
        </div>
      </figcaption>
      <Link
        className={styles.link}
        to={`/products/${id}}`}
        onClick={handleOnClick}
      ></Link>
    </figure>
  );
};
