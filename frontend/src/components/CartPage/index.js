import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems, getItems } from "../../store/cart";
import CartItem from "./CartItem";
import styles from "./items.module.scss";

function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  // console.log(items);
  const cartItems = items.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  if (items[0] === "Login To View Cart" || items[0] === "Your Cart Is Empty") {
    return (
      <>
        <h1 className={`${styles.error}`}>{items}</h1>

        <Link to={`films`}>Find More Films</Link>
      </>
    );
  } else {
    return (
      <>
        {cartItems}
        <Link to={`films`}>Find More Films</Link>
      </>
    );
  }
}

export default CartPage;
