import React, { useEffect } from "react";
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

  const cartItems = items.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <>
      {cartItems}
      <Link to={`films`}>Find More Films</Link>
    </>
  );
}

export default CartPage;
