import { Link } from "react-router-dom";
import CartWidget from "../../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import logo from "./logo.webp";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="" />
        <ul className={styles.ulNav}>
          <li className={styles.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/productos">Productos</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/category/perfumes">Perfumes</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/category/cremas">Cremas</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/category/cart">Carrito</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default Navbar;
