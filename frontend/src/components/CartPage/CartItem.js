import React from "react";
import { useHistory } from "react-router-dom";
import RemoveButton from "./RemoveButton";
import UpdateButton from "./UpdateButton";
import styles from "./items.module.scss";
import thumbs from "../../assets/thumbUrls";

function CartItem({ item }) {
  const { id, quantity, filmId, title, price } = item;
  const thumbUrl = thumbs[filmId];

  return (
    <div className={`${styles.cartTable}`}>
      <img src={thumbUrl} alt="" />
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
        <p className={`${styles.price}`}>${price * quantity}</p>
      </div>
      <div>
        <RemoveButton itemId={id} />
      </div>
    </div>
  );
}

export default CartItem;
