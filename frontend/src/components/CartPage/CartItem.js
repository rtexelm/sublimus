import React from "react";
import { useHistory } from "react-router-dom";
import RemoveButton from "./RemoveButton";
import UpdateButton from "./UpdateButton";
import styles from "./items.module.scss";

function CartItem({ item }) {
  const { id, quantity, title, price } = item;
  // const history = useHistory();

  return (
    // <div className={`${styles.fullPage}`}>
    //   <h1>Your Cart</h1>
    //   <div className={`${styles.cartBox}`}>
    <div className={`${styles.cartTable}`}>
      <img
        src="https://s3.amazonaws.com/criterion-production/films/2b3cb1e242f75f984a61305a512a8417/0IZ7RI0ApmwUqfotR9mOZmFlhsHjvo_small.jpg"
        alt=""
      />
      <div className={`${styles.titleBox}`}>
        <h3>{title}</h3>
        <p>
          In Stock
          <br />
          <span>Never ships within ever</span>
        </p>
      </div>
      <div>
        <UpdateButton item={item} />
        <p className={`${styles.price}`}>${price}</p>
      </div>
      <div>
        <RemoveButton itemId={id} />
      </div>
    </div>
    //   </div>
    // </div>
  );
}

export default CartItem;
