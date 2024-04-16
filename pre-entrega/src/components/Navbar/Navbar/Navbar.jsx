import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import logo from "./logo.webp";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="" />
        <ul className={styles.ulNav}>
          <li className={styles.navItem}>
            <a href="#">Inicio</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Nosotros</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Perfumes</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Cremas</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default Navbar;
