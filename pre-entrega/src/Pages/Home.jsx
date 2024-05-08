//import { Layout } from "../components/Navbar/Layouts/Layout";
//import { ItemListContainer } from "../components/Navbar/ItemListContainer/ItemListContainer";
import styles from "./Home.module.css";

export const Home = () => {
  const greeting = "Bienvenido a perfumerias Marovi!";
  const defaultTitle = "Defaul Title";

  return (
    <main className={styles.main}>
      <section className={styles.headline}>
        <h1 className={styles.titulo1}>{greeting ? greeting : defaultTitle}</h1>
        <p className={styles.parrafoBienvenida}>Mas de 30 años junto a vos!</p>
      </section>
    </main>
  );
};
