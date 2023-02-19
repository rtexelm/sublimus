import React from "react";
import thumbs from "../../assets/thumbUrls";
import styles from "./cart.module.scss";

function NavCartItem({ item }) {
  const { id, quantity, filmId, title, price } = item;
  const thumbUrl = thumbs[filmId];
  const type = "Burned DVD";

  return (
    <li>
      <div className={`${styles.img}`}>
        <img src={thumbUrl} alt="" />
      </div>
      <div className={`${styles.details}`}>
        <p className={styles.title}>{title}</p>
        <p className={styles.type}>{type}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </li>
  );
}

export default NavCartItem;
