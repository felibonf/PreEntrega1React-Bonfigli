import styles from "./ItemListContainer.module.css";

export const ItemListContainer = () => {
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

export default ItemListContainer;
