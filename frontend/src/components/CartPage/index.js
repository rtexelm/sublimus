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

  console.log(items);
  // console.log(message);

  const cartItems = items.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <>
      {message ? (
        <p className={`${styles.cartMessage}`}>{message}</p>
      ) : (
        cartItems
      )}
      <Link to={`films`}>
        <b>Find More Films</b>
      </Link>
    </>
  );
}

export default CartPage;
