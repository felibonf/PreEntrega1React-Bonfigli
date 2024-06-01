//import { Layout } from "../components/Navbar/Layouts/Layout";
//import { ItemListContainer } from "../components/Navbar/ItemListContainer/ItemListContainer";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
/*import { importProductsFromMock } from "../utils/importProducts";*/

export const Home = () => {
  const greeting = "BIENVENIDO A PERFUMERIAS MAROVI";
  const defaultTitle = "Defaul Title";

  return (
    <main className={styles.main}>
      <section className={styles.headline}>
        <h1 className={styles.titulo1}>{greeting ? greeting : defaultTitle}</h1>
        <p className={styles.parrafoBienvenida}>Mas de 30 años junto a vos!</p>
      </section>
      <section className={styles.cards}>
        <div className={styles.card}>
          <img
            src="https://i.pinimg.com/736x/47/cb/53/47cb531eb281c541a6e8a4acc66d997d.jpg"
            alt="#"
          />
          <div className={styles.card_content}>
            <Link className={styles.card_title} to="/category/perfumes">
              Perfumes
            </Link>
            <p className={styles.card_p}></p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://portfoliotatianalopezdelgado.wordpress.com/wp-content/uploads/2014/12/brand-nivea-night-small-47529.jpg?w=636"
            alt="#"
          />
          <div className={styles.card_content}>
            <Link className={styles.card_title} to="/category/cremas">
              Cremas
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://pics.craiyon.com/2023-10-03/9da731de9a8c47f287440f94f571d96c.webp"
            alt="#"
          />
          <div className={styles.card_content}>
            <Link className={styles.card_title} to="/productos">
              Productos
            </Link>
            <p className={styles.card_p}></p>
          </div>
        </div>
      </section>
      {/*<button onClick={importProductsFromMock}>
        Importar productos desde el mock
      </button>*/}
    </main>
  );
};
