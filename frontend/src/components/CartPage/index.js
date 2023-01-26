import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems, getItems } from "../../store/cart";
import CartItem from "./CartItem";
import styles from "./items.module.scss";

function CartPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const items = useSelector(getItems);
  let message = "";

  if (!sessionUser) message = "Sign In To View Cart";
  if (items.length === 0) message = "Your Cart Is Empty";

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const cartItems = items.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <div className={`${styles.fullPage}`}>
      <h1>YOUR CART</h1>
      <div className={`${styles.cartBox}`}>
        {message ? (
          <h1 className={`${styles.cartMessage}`}>{message}</h1>
        ) : (
          <div className={`${styles.cartList}`}>
            {cartItems}
            <section className={`${styles.cartStats}`}>
              <Link className={`${styles.checkout}`} to={`checkout`}>
                Proceed to Checkout
              </Link>
            </section>
          </div>
        )}
        <Link className={`${styles.return}`} to={`films`}>
          Find More Films
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
