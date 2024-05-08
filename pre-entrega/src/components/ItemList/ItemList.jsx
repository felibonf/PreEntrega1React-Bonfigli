import { Item } from "../Item/Item";
import styles from "./ItemList.module.css";

// eslint-disable-next-line react/prop-types
export const ItemList = ({ productsList }) => {
  return (
    <div className={styles.itemList}>
      {productsList?.map((elem) => {
        return <Item key={elem.id} {...elem} />;
      })}
    </div>
  );
};
