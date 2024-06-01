import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ItemCount.module.css";

export const ItemCount = ({ stock, initial, handlleAddToCart }) => {
  const navigate = useNavigate();
  const [cantItems, setCantItems] = useState(0);
  const [pordAgregado, setProdAgregado] = useState(false);

  const handlleAdd = () => {
    setCantItems(cantItems + 1);
  };
  const handlleSubs = () => {
    if (cantItems > 0) {
      setCantItems(cantItems - 1);
    }
    // if (cantItems > 0) setCantItems(cantItems - 1)
    // cantItems > 0 ? setCantItems(cantItems - 1) : alert('No se puede restar')
    // cantItems > 0 && setCantItems(cantItems - 1)
  };

  const handleTerminarCompra = () => {
    setProdAgregado(false);
    navigate("/cart");
  };

  const handleAgregarAlCarrito = () => {
    setProdAgregado(true);
    handlleAddToCart(cantItems);
  };

  return (
    <div className={styles.card_agregar}>
      <div className={styles.btns}>
        <button className={styles.button} onClick={handlleAdd}>
          {" "}
          +{" "}
        </button>
        <span className={styles.items}> {cantItems} </span>
        <button className={styles.button} onClick={handlleSubs}>
          {" "}
          -{" "}
        </button>
      </div>

      {pordAgregado ? (
        <button className={styles.button} onClick={handleTerminarCompra}>
          {" "}
          Terminar Compra{" "}
        </button>
      ) : (
        <button className={styles.button} onClick={handleAgregarAlCarrito}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
