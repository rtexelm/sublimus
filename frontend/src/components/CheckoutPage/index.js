import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems, getItems } from "../../store/cart";
import styles from "./checkout.module.scss";

function CheckoutPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const items = useSelector(getItems);
  let message = "";

  if (!sessionUser) message = "Sign In To Checkout Items";
  if (items.length === 0) message = "No items to chekout";

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  // console.log(items);
  // console.log(message);

  const checkoutItems = items.map((item) => {
    return (
      <div>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>Quantitty: {item.quantity}</p>
        <br />
      </div>
    );
  });

  return (
    <>
      <h1>You have successfully checkedout!</h1>
      <p>Order #{Math.floor(Math.random() * 101)}</p>
      <br />
      <p>{checkoutItems}</p>
      <br />
      <Link to={`films`}>
        <em>Find More Films</em>
      </Link>
    </>
  );
}

export default CheckoutPage;
