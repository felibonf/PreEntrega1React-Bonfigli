import styles from "./Footer.module.css";
import iconfacebook from "./iconfacebook.png";
import icongmail from "./icongmail.png";
import iconinstagram from "./iconinstagram.png";
import iconwhatsapp from "./iconwhatsapp.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer_ul}>
        <li className={styles.footer_il}>
          <a className={styles.footer_a} target="_blank" href="#">
            <img src={iconinstagram} alt="ig" />
          </a>
        </li>
        <li className={styles.footer_il}>
          <a className={styles.footer_a} target="_blank" href="#">
            <img src={iconwhatsapp} alt="wp" />
          </a>
        </li>
        <li className={styles.footer_il}>
          <a className={styles.footer_a} target="_blank" href="#">
            <img src={iconfacebook} alt="fb" />
          </a>
        </li>
        <li className={styles.footer_il}>
          <a className={styles.footer_a} target="_blank" href="#">
            <img src={icongmail} alt="gmail" />
          </a>
        </li>
      </ul>
      <p className={styles.footer_p}>© 2024 Marovi, Inc. All Rights Reserved</p>
    </footer>
  );
};
