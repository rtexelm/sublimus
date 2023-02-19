import React from "react";
import { Link } from "react-router-dom";
import styles from "./cart.module.scss";

function NavCartLinks({ total, count }) {
  const countTense = count === 1 ? `(${count} item)` : `(${count} items)`;

  return (
    <div className={styles.utils}>
      <dl className={styles.totals}>
        <dt>Total {countTense}</dt>
        <dd>${total}</dd>
      </dl>
      <div className={styles.links}>
        <Link className={styles.cartButton} to="/cart">
          View Cart
        </Link>
      </div>
    </div>
  );
}

export default NavCartLinks;
