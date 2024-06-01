import { useCartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";
import { db } from "../../firebase/dbConnection";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import swal from "sweetalert";

export const Cart = () => {
  const { cart, totalPrice, removeItem, clearCart } = useCartContext(); //cart es un array de productos en el carrito
  const [formData, setFormData] = useState({ name: "", tel: "", email: "" });

  const handleRemoveItem = (id, price, qty) => {
    removeItem(id, price, qty);
  };

  // eslint-disable-next-line no-unused-vars
  const handleClearCart = () => {
    clearCart();
  };

  const handleSaveCart = () => {
    console.log("Saving in Database");
    console.log("formData", formData);
    console.log("cart", cart);

    const ordersCollection = collection(db, "orders");
    const newOrder = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: totalPrice,
    };
    addDoc(ordersCollection, newOrder)
      .then((doc) => {
        swal({
          title: "Compra realizada con exito!",
          text: "Tu numero de orden es:" + doc.id,
          icon: "success",
          button: "Aceptar",
        });
        //alert("Compra realizada con éxito, su número de orden es: " + doc.id);
        clearCart();
        setFormData({ name: "", tel: "", email: "" });
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.shopping_cart}>
      <div className={styles.column_labels}>
        <label className={styles.product_image}>Imagen</label>
        <label className={styles.product_title}>Producto</label>
        <label className={styles.product_price}>Precio</label>
        <label className={styles.product_quantity}>Cantidad</label>
        <label className={styles.product_removal}>Quitar</label>
      </div>

      {cart?.map(({ id, name, price, qty, image }, index) => {
        return (
          <tr key={index}>
            <div className={styles.product}>
              <div className={styles.product_image}>
                <img src={image} />
              </div>
              <div className={styles.product_title}>{name}</div>
              <div className={styles.product_price}>
                <span>$</span>
                {price}
              </div>
              <div className={styles.product_quantity}>{qty}</div>
              <div className={styles.product_removal}>
                <button onClick={() => handleRemoveItem(id, price, qty)}>
                  Quitar Item
                </button>
              </div>
            </div>
          </tr>
        );
      })}
      <div className={styles.totals}>
        <div className={styles.totals_item}>
          <label> Total=</label>
          <div className={styles.totals_value} id="cart-total">
            <span>$</span>
            {totalPrice},000
          </div>
          <div>
            <h4 className={styles.compra}>Para continuar ingrese sus datos:</h4>
          </div>
          <div className={styles.inputs}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ingrese su nombre"
              onChange={(e) => handleOnChange(e)}
            />
            <input
              type="text"
              name="tel"
              id="tel"
              placeholder="Ingrese su telefono"
              onChange={(e) => handleOnChange(e)}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese su email"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <button
            disabled={!Object.values(formData).every((value) => value !== " ")}
            className={styles.comprar_btn}
            onClick={handleSaveCart}
          >
            Comprar
          </button>
          {/*<button onClick={handleClearCart}>Clear Cart</button>*/}
        </div>
      </div>
    </div>
  );
};

{
  /* <button onClick={handleClearCart}>
        Finalizar Compra - Ir a Checkout
</button> */
}
