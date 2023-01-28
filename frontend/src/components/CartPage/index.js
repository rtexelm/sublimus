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
  const totalItems = () => {
    let total = 0;
    for (const i of items) {
      total += i.quantity;
    }
    return total;
  };
  const subTotal = () => {
    let total = 0;
    for (const i of items) {
      total += i.quantity * i.price;
    }
    return total.toFixed(2);
  };

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
          <>
            <p className={`${styles.cartHeader}`}>{totalItems()} Items</p>
            <div className={`${styles.cartList}`}>
              {cartItems}
              <section className={`${styles.cartStats}`}>
                <div>
                  <p>
                    <span className={`${styles.cartHelp}`}>Need Help?</span>
                    <br />
                    Contact me at my current email.
                  </p>
                </div>
                <div>
                  <dl className={`${styles.cartTotals}`}>
                    <dt>SUBTOTAL</dt>
                    <dd>{subTotal()}</dd>
                  </dl>
                  <Link className={`${styles.checkout}`} to={`checkout`}>
                    Proceed to Checkout
                  </Link>
                </div>
              </section>
            </div>
          </>
        )}
        <Link className={`${styles.return}`} to={`films`}>
          Find More Films
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
