import styles from "./CartWidget.module.css";
import { useCartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { totalQty } = useCartContext();
  return (
    <div>
      <span>{totalQty}</span>
      <span className={styles.cartLogo}>🛒</span>
    </div>
  );
};

export default CartWidget;
