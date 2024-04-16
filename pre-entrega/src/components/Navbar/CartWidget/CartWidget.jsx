import styles from "./CartWidget.module.css";

export const CartWidget = () => {
  return (
    <div>
      <span></span>
      <span className={styles.cartLogo}>🛒</span>
    </div>
  );
};

export default CartWidget;
